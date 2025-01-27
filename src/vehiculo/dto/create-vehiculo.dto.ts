import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsPositive, IsString } from "class-validator";


// Aqui se define estado

export enum EstadoVehiculo{
    SIN_VALIDAR ='sin validar',
    EN_VERIFICACION = 'en verificacion',
    FINALIZADO = 'finalizado'
}

export class CreateVehiculoDto {

    @IsString()
    Tipo: string;

    @IsString()
    Placa: string;

    @IsEnum(EstadoVehiculo)
    Estado: EstadoVehiculo;

    @IsNumber()
    @IsPositive()
    @Type(()=> Number)
    Transportador_id: number;
}
