import { Injectable } from '@nestjs/common';
import { CreateCargaDto } from './dto/create-carga.dto';
import { UpdateCargaDto } from './dto/update-carga.dto';

@Injectable()
export class CargaService {
  create(createCargaDto: CreateCargaDto) {
    return 'This action adds a new carga';
  }

  findAll() {
    return `This action returns all carga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carga`;
  }

  update(id: number, updateCargaDto: UpdateCargaDto) {
    return `This action updates a #${id} carga`;
  }

  remove(id: number) {
    return `This action removes a #${id} carga`;
  }
}
