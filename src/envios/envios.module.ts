import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envios } from './entities/envio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Envios])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}
