import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';


@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto) {
    try {
      const vehiculoData = {
        Tipo: createVehiculoDto.Tipo,
        Placa: createVehiculoDto.Placa,
        Estado: createVehiculoDto.Estado,
        transportador: { 
          Id_transportador: createVehiculoDto.Transportador_id 
        }
      };
      console.log('Data a guardar:', vehiculoData);

      const vehiculo = this.vehiculoRepository.create(vehiculoData);
      return await this.vehiculoRepository.save(vehiculo);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('La placa ya existe');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.vehiculoRepository.find({
      relations: {
        transportador: true,
        muelles: true,
        cargas: true,
        estadosMuelle: true
      }
    });
  }

  async findOne(id: number) {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { Id_vehiculo: id },
      relations: {
        transportador: true,
        muelles: true,
        cargas: true,
        estadosMuelle: true
      }
    });

    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con ID ${id} no encontrado`);
    }

    return vehiculo;
  }

  async update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    const vehiculo = await this.findOne(id);

    try {
      const updateData = {
        ...updateVehiculoDto,
        transportador: updateVehiculoDto.Transportador_id ? {
          Id_transportador: updateVehiculoDto.Transportador_id
        } : undefined
      };

      Object.assign(vehiculo, updateData);
      return await this.vehiculoRepository.save(vehiculo);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('La placa ya existe');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const vehiculo = await this.findOne(id);

    try {
      await this.vehiculoRepository.remove(vehiculo);
      return {
        message: `Vehículo con ID ${id} eliminado exitosamente`
      };
    } catch (error) {
      if (error.code === '23503') {
        throw new BadRequestException(
          'No se puede eliminar el vehículo porque tiene registros relacionados'
        );
      }
      throw error;
    }
  }
}