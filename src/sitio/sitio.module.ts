import { Module } from '@nestjs/common';
import { SitioService } from './sitio.service';
import { SitioController } from './sitio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sitio } from './entities/sitio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sitio])],
  controllers: [SitioController],
  providers: [SitioService],
})
export class SitioModule {}
