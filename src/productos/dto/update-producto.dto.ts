import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {

    @IsString()
    Cova: string;

    @IsString()
    Nombre: string;

    @IsString()
    Descripcion: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    Carga_id: number;
}
