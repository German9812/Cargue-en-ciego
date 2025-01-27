import { IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Type } from 'class-transformer';

export class CreateCargaDto {

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    Fecha: Date;

    @IsNotEmpty()
    @IsEnum(['Sin iniciar', 'En verificación', 'Finalizado'],{
        message: 'Estado debe ser uno de: Sin iniciar, En verificación, Finalizado',
    })
    Estado: string;

    @IsNotEmpty()
    vehiculoId: number;

    @IsNotEmpty()
    muelleId: number;

    @IsOptional()
    @IsArray()
    productoIds?: number[];

    @IsOptional()
    @IsArray()
    detalleIds?: number[];
    
}
