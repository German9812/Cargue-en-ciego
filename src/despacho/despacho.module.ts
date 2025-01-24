import { Module } from '@nestjs/common';
import { DespachoService } from './despacho.service';
import { DespachoController } from './despacho.controller';

@Module({
  controllers: [DespachoController],
  providers: [DespachoService],
})
export class DespachoModule {}
