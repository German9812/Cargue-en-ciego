import { IsDate, IsEnum, IsNumber } from "class-validator";

export enum EstadoMuelleEnum {
  SIN_INICIAR = 'Sin iniciar',
  EN_VERIFICACION = 'En verificación',
  FINALIZADO = 'Finalizado'
}

export class CreateEstadoMuelleDto {

    @IsEnum(EstadoMuelleEnum)
    Estado: EstadoMuelleEnum;

    @IsDate()
    Hora_inicio: Date;

    @IsDate()
    Hora_fin: Date;
    
    @IsNumber()
    vehiculoId: number;

    @IsNumber()
    muelleId: number;  

    @IsNumber()
    transportadorId: number;
}
