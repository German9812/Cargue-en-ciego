import { Module } from '@nestjs/common';
import { CargaService } from './carga.service';
import { CargaController } from './carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carga } from './entities/carga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carga])],
  controllers: [CargaController],
  providers: [CargaService],
})
export class CargaModule {}
