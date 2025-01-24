import { Module } from '@nestjs/common';
import { TransportadorService } from './transportador.service';
import { TransportadorController } from './transportador.controller';

@Module({
  controllers: [TransportadorController],
  providers: [TransportadorService],
})
export class TransportadorModule {}
