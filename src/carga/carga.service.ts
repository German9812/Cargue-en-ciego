import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carga } from './entities/carga.entity';
import { CreateCargaDto } from './dto/create-carga.dto';
import { UpdateCargaDto } from './dto/update-carga.dto';

@Injectable()
export class CargaService {
  constructor(
    @InjectRepository(Carga)
    private readonly cargaRepository: Repository<Carga>,
  ) {}

  async create(createCargaDto: CreateCargaDto) {
    const { vehiculoId, muelleId, productoIds, detalleIds, ...rest } = createCargaDto;

    const carga = this.cargaRepository.create(rest);

    if (vehiculoId) carga.vehiculo = { Id_vehiculo: vehiculoId } as any;
    if (muelleId) carga.muelle = { Id_muelle: muelleId } as any;
    if (productoIds) carga.productos = productoIds.map((id) => ({ Id_producto: id } as any));
    if (detalleIds) carga.detalles = detalleIds.map((id) => ({ Id_detalle: id } as any));

    return this.cargaRepository.save(carga);
  }

  findAll() {
    return this.cargaRepository.find({
      relations: ['vehiculo', 'muelle', 'productos', 'detalles'],
    });
  }

  async findOne(id: number) {
    const carga = await this.cargaRepository.findOne({
      where: { id: id },
      relations: ['vehiculo', 'muelle', 'productos', 'detalles'],
    });

    if (!carga) {
      throw new NotFoundException(`Carga con ID ${id} no encontrada`);
    }

    return carga;
  }

  async update(id: number, updateCargaDto: UpdateCargaDto) {
    const carga = await this.findOne(id);
    const { vehiculoId, muelleId, productoIds, detalleIds, ...rest } = updateCargaDto;

    if (vehiculoId) carga.vehiculo = { Id_vehiculo: vehiculoId } as any;
    if (muelleId) carga.muelle = { Id_muelle: muelleId } as any;
    if (productoIds) carga.productos = productoIds.map((id) => ({ Id_producto: id } as any));
    if (detalleIds) carga.detalles = detalleIds.map((id) => ({ Id_detalle: id } as any));

    Object.assign(carga, rest);

    return this.cargaRepository.save(carga);
  }

  async remove(id: number) {
    const carga = await this.findOne(id);
    return this.cargaRepository.remove(carga);
  }
}
