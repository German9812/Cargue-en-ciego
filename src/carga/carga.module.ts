import { Module } from '@nestjs/common';
import { CargaService } from './carga.service';
import { CargaController } from './carga.controller';

@Module({
  controllers: [CargaController],
  providers: [CargaService],
})
export class CargaModule {}
