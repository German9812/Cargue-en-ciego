import { PartialType } from '@nestjs/mapped-types';
import { CreateMuelleDto } from './create-muelle.dto';

export class UpdateMuelleDto extends PartialType(CreateMuelleDto) {}
