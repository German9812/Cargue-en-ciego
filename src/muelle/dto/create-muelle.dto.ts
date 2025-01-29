import { Type } from "class-transformer";
import { IsPositive, IsString } from "class-validator";

export class CreateMuelleDto {

    @IsString()
    Nombre: string;

    @IsString()
    Sitio_id: string;
    
    @Type(() => Number)
    @IsPositive()
    Vehiculo_id: number;
}
