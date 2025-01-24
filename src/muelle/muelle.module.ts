import { Module } from '@nestjs/common';
import { MuelleService } from './muelle.service';
import { MuelleController } from './muelle.controller';

@Module({
  controllers: [MuelleController],
  providers: [MuelleService],
})
export class MuelleModule {}
