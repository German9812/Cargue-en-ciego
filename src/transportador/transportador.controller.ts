import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportadorService } from './transportador.service';
import { CreateTransportadorDto } from './dto/create-transportador.dto';
import { UpdateTransportadorDto } from './dto/update-transportador.dto';

@Controller('transportador')
export class TransportadorController {
  constructor(private readonly transportadorService: TransportadorService) {}

  @Post()
  create(@Body() createTransportadorDto: CreateTransportadorDto) {
    return this.transportadorService.create(createTransportadorDto);
  }

  @Get()
  findAll() {
    return this.transportadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransportadorDto: UpdateTransportadorDto) {
    return this.transportadorService.update(+id, updateTransportadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportadorService.remove(+id);
  }
}
