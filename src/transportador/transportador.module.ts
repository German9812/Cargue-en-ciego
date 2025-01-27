import { Module } from '@nestjs/common';
import { TransportadorService } from './transportador.service';
import { TransportadorController } from './transportador.controller';
import { Transportador } from './entities/transportador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Transportador])],
  controllers: [TransportadorController],
  providers: [TransportadorService],
})
export class TransportadorModule {}
