import { Injectable } from '@nestjs/common';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';

@Injectable()
export class DetalleService {
  create(createDetalleDto: CreateDetalleDto) {
    return 'This action adds a new detalle';
  }

  findAll() {
    return `This action returns all detalle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalle`;
  }

  update(id: number, updateDetalleDto: UpdateDetalleDto) {
    return `This action updates a #${id} detalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalle`;
  }
}
