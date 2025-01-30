import { ApiProperty } from "@nestjs/swagger";
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
    @ApiProperty({
    type: String,
    example: ''
    })
    Tipo: string;

    @IsString()
    @ApiProperty({
    type: String,
    example: ''
    })
    Placa: string;

    @IsEnum(EstadoVehiculo)
    @ApiProperty({
    type: String,
    example: 'sin validar, en verificacion, finalizado',

    })
    Estado: EstadoVehiculo;

    @IsNumber()
    @IsPositive()
    @Type(()=> Number)
    @ApiProperty({
    type: Number,
    example: ''
    })
    Transportador_id: number;
}
