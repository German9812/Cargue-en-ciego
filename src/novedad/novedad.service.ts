import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNovedadDto } from './dto/create-novedad.dto';
import { UpdateNovedadDto } from './dto/update-novedad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Novedad } from './entities/novedad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NovedadService {
  constructor(
    @InjectRepository(Novedad)
    private readonly novedadRepository: Repository<Novedad>,
  ){}
  
  async create(createNovedadDto: CreateNovedadDto) {
    const newnovedad = this.novedadRepository.create(createNovedadDto)
    return 'This action adds a new novedad';
  }

  findAll() {
    return this.novedadRepository.find();
  }

  async findOne(id: number) {
    const novedad = await this.novedadRepository.findOneBy({Id_novedad:id});
    
    if (!novedad){
      throw new NotFoundException(`Novedad con ID $ {id} no encontrado `);
    }
    return novedad;
  }

  async update(id: number, updateNovedadDto: UpdateNovedadDto) {
    await this.novedadRepository.update({Id_novedad: id}, updateNovedadDto);
    return await this.novedadRepository.findOneBy({Id_novedad: id});
  }

  async remove(id: number) {
    const novedad = await this.findOne(id);
    if (!novedad){
      throw new NotFoundException(`Novedad con ID ${id} no encontrada`);
    }
    return await this.novedadRepository.remove(novedad);
  }
}