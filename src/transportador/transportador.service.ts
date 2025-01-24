import { Injectable } from '@nestjs/common';
import { CreateTransportadorDto } from './dto/create-transportador.dto';
import { UpdateTransportadorDto } from './dto/update-transportador.dto';

@Injectable()
export class TransportadorService {
  create(createTransportadorDto: CreateTransportadorDto) {
    return 'This action adds a new transportador';
  }

  findAll() {
    return `This action returns all transportador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportador`;
  }

  update(id: number, updateTransportadorDto: UpdateTransportadorDto) {
    return `This action updates a #${id} transportador`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportador`;
  }
}
