import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoMuelleService } from './estado-muelle.service';
import { CreateEstadoMuelleDto } from './dto/create-estado-muelle.dto';
import { UpdateEstadoMuelleDto } from './dto/update-estado-muelle.dto';

@Controller('estado-muelle')
export class EstadoMuelleController {
  constructor(private readonly estadoMuelleService: EstadoMuelleService) {}

  @Post()
  create(@Body() createEstadoMuelleDto: CreateEstadoMuelleDto) {
    return this.estadoMuelleService.create(createEstadoMuelleDto);
  }

  @Get()
  findAll() {
    return this.estadoMuelleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoMuelleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoMuelleDto: UpdateEstadoMuelleDto) {
    return this.estadoMuelleService.update(+id, updateEstadoMuelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoMuelleService.remove(+id);
  }
}
