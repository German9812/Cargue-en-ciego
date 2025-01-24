import { Module } from '@nestjs/common';
import { EstadoMuelleService } from './estado-muelle.service';
import { EstadoMuelleController } from './estado-muelle.controller';

@Module({
  controllers: [EstadoMuelleController],
  providers: [EstadoMuelleService],
})
export class EstadoMuelleModule {}
