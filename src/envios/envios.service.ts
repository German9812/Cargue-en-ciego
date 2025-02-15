import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Envios } from './entities/envio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envios)
    private readonly enviosRepository: Repository<Envios>,
  ){}

  create(createEnvioDto: CreateEnvioDto): Promise<Envios> {
    const { muelleId, Fecha_despacho, ...rest } = createEnvioDto;

    const envio = this.enviosRepository.create({
      ...rest,
      Fecha_despacho: Fecha_despacho || new Date(),
    });

    if (muelleId) envio.muelle = { Id_muelle: muelleId } as any;
    return this.enviosRepository.save(envio);
  }

  findAll(): Promise<Envios[]> {
    return this.enviosRepository.find({
      relations: ['muelle', 'despachos'],
    })
  }

  async findOne(id: number): Promise<Envios> {
    const envio = await this.enviosRepository.findOne({
      where: { Id_envio: id },
      relations: ['muelle', 'despachos'],
    });
    if (!envio) {
      throw new NotFoundException(`Envio con ID ${id} no encontrado`);
    }
    return envio;
  }

  async update(id: number, updateEnvioDto: UpdateEnvioDto): Promise<Envios> {	
    const envio = await this.findOne(id);
    const { muelleId, ...rest } = updateEnvioDto;

    if (muelleId) envio.muelle = { Id_muelle: muelleId } as any;

    Object.assign(envio, rest);

    return this.enviosRepository.save(envio);
  }

  async remove(id: number): Promise<void> {
    const envio = await this.enviosRepository.delete(id);
    if (envio.affected === 0) {
      throw new NotFoundException(`Envio con ID ${id} no encontrado`);
    }
  }
}