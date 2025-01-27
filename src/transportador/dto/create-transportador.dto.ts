import { IsString } from "class-validator";

export class CreateTransportadorDto {

    @IsString()
    Identificacion: string;

    @IsString()
    Nombre: string;

    @IsString()
    Nelefono: string;

}
