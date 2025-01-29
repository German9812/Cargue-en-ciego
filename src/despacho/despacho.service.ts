import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDespachoDto } from './dto/create-despacho.dto';
import { UpdateDespachoDto } from './dto/update-despacho.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Despacho } from './entities/despacho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DespachoService {
  constructor(
    @InjectRepository(Despacho)
    private readonly despachoRepository: Repository<Despacho>,
  ) {}

  async create(createDespachoDto: CreateDespachoDto): Promise<Despacho> {
    const { envio, ...rest } = createDespachoDto;

    const despacho = this.despachoRepository.create({
      ...rest,
      Fecha: rest.fecha || new Date(),
    });

    if (envio) despacho.envio = { Id_envio: envio } as any;

    return this.despachoRepository.save(despacho);
  }

  findAll(): Promise<Despacho[]> {
    return this.despachoRepository.find({
      relations: ['envio'], 
    });
  }

  async findOne(id: number): Promise<Despacho> {
    const despacho = await this.despachoRepository.findOne({
      where: { Id_despacho: id },
      relations: ['envio'], 
    });
    if (!despacho) {
      throw new NotFoundException(`Despacho con ID ${id} no encontrado`);
    }
    return despacho;
  }

  async update(id: number, updateDespachoDto: UpdateDespachoDto): Promise<Despacho> {
    const despacho = await this.findOne(id);
    const { envio, ...rest } = updateDespachoDto;

    if (envio) {
      despacho.envio = { Id_envio: envio } as any; 
    }

    Object.assign(despacho, rest);

    return this.despachoRepository.save(despacho);
  }

  async remove(id: number): Promise<void> {
    const result = await this.despachoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Despacho con ID ${id} no encontrado`);
    }
  }
}
