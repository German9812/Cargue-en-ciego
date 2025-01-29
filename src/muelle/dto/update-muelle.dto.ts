import { PartialType } from '@nestjs/mapped-types';
import { CreateMuelleDto } from './create-muelle.dto';
import { IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateMuelleDto extends PartialType(CreateMuelleDto) {
    
    @IsString()
    Nombre: string;

    @IsString()
    Sitio_id: string;

    @Type(() => Number)
    @IsPositive()
    Vehiculo_id: number;
    
}

