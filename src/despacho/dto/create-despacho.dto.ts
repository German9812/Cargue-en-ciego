import { IsDate, IsNumber, IsOptional } from "class-validator";

export class CreateDespachoDto {
    @IsOptional()
    @IsDate()
    fecha?: Date;

    @IsNumber()
    envio:number;
}
