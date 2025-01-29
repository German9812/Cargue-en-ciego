import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detalle } from './entities/detalle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetalleService {
  constructor(
    @InjectRepository(Detalle)
    private readonly detalleRepository: Repository<Detalle>,
  ){}


  async create(createDetalleDto: CreateDetalleDto): Promise <Detalle> {
    const { productoId, novedadId, cargaId, ...rest} = createDetalleDto;

    const detalle = this.detalleRepository.create({
      ...rest,
    });

    if (productoId) detalle.producto = { Id_producto: productoId } as any;
    if (novedadId) detalle.novedad = { Id_novedad: novedadId } as any;
    if (cargaId) detalle.carga = { Id_carga: cargaId } as any;

    return this.detalleRepository.save(detalle);
    
  }

  findAll(): Promise <Detalle[]> {
    return this.detalleRepository.find({
      relations: ['producto', 'novedad', 'carga'],
    });
  }

  async findOne(id: number): Promise <Detalle>  {
    const detalle = await this.detalleRepository.findOne({
      where: { id: id },
      relations: ['producto', 'novedad', 'carga'],
    });
    if (!detalle) {
      throw new NotFoundException(`Detalle con ID ${id} no encontrado`);
    }
    return detalle;
  }

  async update(id: number, updateDetalleDto: UpdateDetalleDto): Promise <Detalle> {
    const detalle = await this.findOne(id);
    const { productoId, novedadId, cargaId, ...rest} = updateDetalleDto;

    if (productoId) detalle.producto = { Id_producto: productoId } as any;
    if (novedadId) detalle.novedad = { Id_novedad: novedadId } as any;
    if (cargaId) detalle.carga = { Id_carga: cargaId } as any;

    Object.assign(detalle, rest);

    return this.detalleRepository.save(detalle);
  }

  async remove(id: number): Promise <void> {
    const result = await this.detalleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Detalle con ID ${id} no encontrado`);
    }
  }
}