import { IsEmail, IsEnum, IsString } from "class-validator";

export enum UserRol {
    ADMINISTRADOR = "Administrador",
    AUXILIAR = "Auxiliar",
}

export class CreateUsuarioDto {

    @IsEmail()
    correoElectronico: string;

    @IsString()
    @IsEnum (UserRol, {
        message: 'El rol de usuario debe ser: Administrador o Auxiliar',
    })
    rol: UserRol;
}
