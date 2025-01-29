import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EnviosService])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}
