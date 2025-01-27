import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransportadorDto } from './dto/create-transportador.dto';
import { UpdateTransportadorDto } from './dto/update-transportador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transportador } from './entities/transportador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransportadorService {
constructor(
    @InjectRepository(Transportador)
    private readonly transportadorRepository: Repository<Transportador>,
  ){}

  async create(createTransportadorDto: CreateTransportadorDto) {
    const newtransportador = this.transportadorRepository.create(createTransportadorDto);
    return this.transportadorRepository.save(newtransportador) 
  }

  findAll() {
    return this.transportadorRepository.find();
  }

  async findOne(id: number) {
    const transportador = await this.transportadorRepository.findOneBy({Id_transportador:id});
  

  if (!transportador) {
    throw new NotFoundException(`Transportador con ID ${id} no encontrado`);
}

  return transportador;
}

  async update(id: number, updateTransportadorDto: UpdateTransportadorDto) {
    await this.transportadorRepository.update({Id_transportador: id}, updateTransportadorDto);
    return await this.transportadorRepository.findOneBy({ Id_transportador: id });  }

  async remove(id: number) {
    const transportador = await this.findOne(id);
    if (!transportador){
      throw new NotFoundException(`Transportador con ID ${id} no encontrado`);
    }  
    return await this.transportadorRepository.remove(transportador);
  }
}