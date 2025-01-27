import { IsEmail, IsString } from "class-validator";
import { Entity } from "typeorm";

export class CreateUsuarioDto {

    @IsEmail()
    correoElectronico: string;

    @IsString()
    rol: string;
}
