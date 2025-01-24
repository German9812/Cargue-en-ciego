import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DespachoService } from './despacho.service';
import { CreateDespachoDto } from './dto/create-despacho.dto';
import { UpdateDespachoDto } from './dto/update-despacho.dto';

@Controller('despacho')
export class DespachoController {
  constructor(private readonly despachoService: DespachoService) {}

  @Post()
  create(@Body() createDespachoDto: CreateDespachoDto) {
    return this.despachoService.create(createDespachoDto);
  }

  @Get()
  findAll() {
    return this.despachoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.despachoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDespachoDto: UpdateDespachoDto) {
    return this.despachoService.update(+id, updateDespachoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.despachoService.remove(+id);
  }
}
