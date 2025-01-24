import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoMuelleDto } from './create-estado-muelle.dto';

export class UpdateEstadoMuelleDto extends PartialType(CreateEstadoMuelleDto) {}
