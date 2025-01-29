import { PartialType } from '@nestjs/mapped-types';
import { CreateNovedadDto } from './create-novedad.dto';
import { IsString } from 'class-validator';

export class UpdateNovedadDto extends PartialType(CreateNovedadDto) {

    @IsString()
    Nombre: string;
}
