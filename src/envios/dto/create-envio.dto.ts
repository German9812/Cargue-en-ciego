import { IsString } from "class-validator";

export class CreateEnvioDto {

    @IsString()
    Muelle : string;

    @IsString()
    Fecha_despacho: Date;

    muelleId: number;
    
}
