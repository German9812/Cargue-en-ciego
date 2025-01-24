import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MuelleService } from './muelle.service';
import { CreateMuelleDto } from './dto/create-muelle.dto';
import { UpdateMuelleDto } from './dto/update-muelle.dto';

@Controller('muelle')
export class MuelleController {
  constructor(private readonly muelleService: MuelleService) {}

  @Post()
  create(@Body() createMuelleDto: CreateMuelleDto) {
    return this.muelleService.create(createMuelleDto);
  }

  @Get()
  findAll() {
    return this.muelleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muelleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuelleDto: UpdateMuelleDto) {
    return this.muelleService.update(+id, updateMuelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muelleService.remove(+id);
  }
}
