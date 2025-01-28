import { Module } from '@nestjs/common';
import { DespachoService } from './despacho.service';
import { DespachoController } from './despacho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despacho } from './entities/despacho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Despacho])],
  controllers: [DespachoController],
  providers: [DespachoService],
})
export class DespachoModule {}
