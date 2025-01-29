import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadoMuelleDto } from './dto/create-estado-muelle.dto';
import { UpdateEstadoMuelleDto } from './dto/update-estado-muelle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoMuelle } from './entities/estado-muelle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoMuelleService {
  constructor(
    @InjectRepository(EstadoMuelle)
    private readonly estadoMuelleRepository: Repository<EstadoMuelle>,
  ) {}

async create(createEstadoMuelleDto: CreateEstadoMuelleDto) {
  const { vehiculoId, muelleId, ...rest } = createEstadoMuelleDto;

  const estadoMuelle = this.estadoMuelleRepository.create({
    ...rest,
  });

  if (vehiculoId) estadoMuelle.vehiculo = { Id_vehiculo: vehiculoId } as any;
  if (muelleId) estadoMuelle.muelle = { Id_muelle: muelleId } as any;

  return this.estadoMuelleRepository.save(estadoMuelle);
}


  async findAll(): Promise<EstadoMuelle[]> {
    return await this.estadoMuelleRepository.find({
      relations: ['vehiculo', 'muelle'],
    });
  }

  async findOne(id: number): Promise<EstadoMuelle> {
    const estadoMuelle = await this.estadoMuelleRepository.findOne({
      where: { Id_estado_Muelle: id },
      relations: ['vehiculo', 'muelle'],
    });
    if (!estadoMuelle) {
      throw new NotFoundException(`EstadoMuelle con ID ${id} no encontrado`);
    }
    return estadoMuelle;
  }

  async update(id: number, updateEstadoMuelleDto: UpdateEstadoMuelleDto): Promise<EstadoMuelle> {
    const estadoMuelle = await this.findOne(id);
    const { vehiculoId, muelleId, ...rest } = updateEstadoMuelleDto;

    if (vehiculoId) estadoMuelle.vehiculo = { Id_vehiculo: vehiculoId } as any;
    if (muelleId) estadoMuelle.muelle = { Id_muelle: muelleId } as any;

    Object.assign(estadoMuelle, rest);

    return this.estadoMuelleRepository.save(estadoMuelle);
  }

  async remove(id: number): Promise<void> {
    const estadoMuelle = await this.estadoMuelleRepository.delete(id);
    if (estadoMuelle.affected === 0) {
      throw new NotFoundException(`EstadoMuelle con ID ${id} no encontrado`);
    }
  }
}