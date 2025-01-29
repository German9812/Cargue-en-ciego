import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    Cova: string;

    @IsString()
    Nombre:string;

    @IsString()
    Descripcion: string

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    Carga_id: number;
}
