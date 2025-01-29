import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMuelleDto } from './dto/create-muelle.dto';
import { UpdateMuelleDto } from './dto/update-muelle.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Muelle } from './entities/muelle.entity';
import { Vehiculo } from 'src/vehiculo/entities/vehiculo.entity';


@Injectable()
export class MuelleService {
  constructor(
    @InjectRepository(Muelle)
    private readonly muelleRepository: Repository<Muelle>,
  ) {}

  async create(createMuelleDto: CreateMuelleDto) {
    try {
      const muelleData = {
        Nombre: createMuelleDto.Nombre,
        Sitio_id: createMuelleDto.Sitio_id,
        Vehiculo_id: createMuelleDto.Vehiculo_id
      };
      console.log('Data a guardar:', muelleData);

      const muelle = this.muelleRepository.create(muelleData);
      return await this.muelleRepository.save(muelle);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('El muelle ya existe');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.muelleRepository.find({
      relations: [ 'vehiculos', 'sitios']
    });
  }

  async findOne(id: number) {
    const muelle = await this.muelleRepository.findOne({
      where: { Id_muelle: id },
      relations: ['vehiculos', 'sitios']
    });
    if (!muelle) {
      throw new BadRequestException(`Muelle con ID ${id} no encontrado`);
    }
    return muelle;
  }

  async update(id: number, updateMuelleDto: UpdateMuelleDto) {
    const muelle = await this.findOne(id);

    try {
      const muelleData = {
        Nombre: updateMuelleDto.Nombre,
        Sitio_id: updateMuelleDto.Sitio_id,
        Vehiculo_id: updateMuelleDto.Vehiculo_id
      };
    
    Object.assign(muelle, muelleData);
    return await this.muelleRepository.save(muelle);
    }
    catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('El muelle ya existe');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const muelle = await this.findOne(id); 
    try {
      await this.muelleRepository.remove(muelle); // Elimina el muelle de la base de datos.
  
      return {
        message: 'Muelle eliminado con éxito'
      };
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException(
          'El muelle no se puede eliminar');
      }
      throw error; 
    }
  }
}