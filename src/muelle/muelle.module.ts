import { Module } from '@nestjs/common';
import { MuelleService } from './muelle.service';
import { MuelleController } from './muelle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Muelle } from './entities/muelle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Muelle])], 
  controllers: [MuelleController],
  providers: [MuelleService],
})
export class MuelleModule {}
