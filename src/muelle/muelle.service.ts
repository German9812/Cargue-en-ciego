import { Injectable } from '@nestjs/common';
import { CreateMuelleDto } from './dto/create-muelle.dto';
import { UpdateMuelleDto } from './dto/update-muelle.dto';

@Injectable()
export class MuelleService {
  create(createMuelleDto: CreateMuelleDto) {
    return 'This action adds a new muelle';
  }

  findAll() {
    return `This action returns all muelle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} muelle`;
  }

  update(id: number, updateMuelleDto: UpdateMuelleDto) {
    return `This action updates a #${id} muelle`;
  }

  remove(id: number) {
    return `This action removes a #${id} muelle`;
  }
}
