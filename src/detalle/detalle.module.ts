import { Module } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleController } from './detalle.controller';

@Module({
  controllers: [DetalleController],
  providers: [DetalleService],
})
export class DetalleModule {}
