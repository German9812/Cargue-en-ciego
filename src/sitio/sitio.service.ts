import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSitioDto } from './dto/create-sitio.dto';
import { UpdateSitioDto } from './dto/update-sitio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sitio } from './entities/sitio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SitioService {
  constructor(
    @InjectRepository(Sitio)
    private readonly sitioRepository: Repository<Sitio>,
  ){}

  async create(createSitioDto: CreateSitioDto) {
    const newsitio = this.sitioRepository.create(createSitioDto);
    return this.sitioRepository.save(newsitio)
    } 
  
  findAll() {
    return this.sitioRepository.find();
  }

  async findOne(id: number) {
    const sitio = await this.sitioRepository.findOneBy({Id_sitio:id});
    
    if (!sitio) {
      throw new NotFoundException(`Sitio con ID $ {id} no encontrado`);
    }
      return sitio;
  }

  async update(id: number, updateSitioDto: UpdateSitioDto) {
    await this.sitioRepository.update({Id_sitio: id}, updateSitioDto);
    return await this.sitioRepository.findOneBy({ Id_sitio: id });
}

  async remove(id: number) {
    const sitio = await this.findOne(id);
    if (!sitio){
      throw new NotFoundException(`Sitio con ID ${id} no encontrado`);
    }
    return await this.sitioRepository.remove(sitio); }
}
