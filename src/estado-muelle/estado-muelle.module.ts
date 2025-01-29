import { Module } from '@nestjs/common';
import { EstadoMuelleService } from './estado-muelle.service';
import { EstadoMuelleController } from './estado-muelle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoMuelle } from './entities/estado-muelle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoMuelle])],
  controllers: [EstadoMuelleController],
  providers: [EstadoMuelleService],
  exports: [EstadoMuelleService],
})
export class EstadoMuelleModule {}
