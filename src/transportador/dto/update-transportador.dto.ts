import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportadorDto } from './create-transportador.dto';

export class UpdateTransportadorDto extends PartialType(CreateTransportadorDto) {}
