import { IsNumber, IsString } from "class-validator";

export class CreateDetalleDto {
    
    @IsString()
    Cantidad_registrada: string;

    @IsString()
    Cantidad_real: string;

    @IsString()
    Observaciones: string;

    @IsNumber()
    productoId: number;

    @IsNumber()
    novedadId: number;

    @IsNumber()
    cargaId: number;

}
