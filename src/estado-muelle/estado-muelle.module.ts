import { Module } from '@nestjs/common';
import { EstadoMuelleService } from './estado-muelle.service';
import { EstadoMuelleController } from './estado-muelle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoMuelleService])],
  controllers: [EstadoMuelleController],
  providers: [EstadoMuelleService],
})
export class EstadoMuelleModule {}
