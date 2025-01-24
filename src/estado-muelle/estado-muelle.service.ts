import { Injectable } from '@nestjs/common';
import { CreateEstadoMuelleDto } from './dto/create-estado-muelle.dto';
import { UpdateEstadoMuelleDto } from './dto/update-estado-muelle.dto';

@Injectable()
export class EstadoMuelleService {
  create(createEstadoMuelleDto: CreateEstadoMuelleDto) {
    return 'This action adds a new estadoMuelle';
  }

  findAll() {
    return `This action returns all estadoMuelle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoMuelle`;
  }

  update(id: number, updateEstadoMuelleDto: UpdateEstadoMuelleDto) {
    return `This action updates a #${id} estadoMuelle`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoMuelle`;
  }
}
