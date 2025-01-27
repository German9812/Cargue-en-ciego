import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export enum UserRol {
    ADMINISTRADOR = "Administrador",
    AUXILIAR = "Auxiliar",
}

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    
    @IsEmail()
    correoElectronico?: string | undefined;

    @IsString()
        @IsEnum (UserRol, {
            message: 'El rol de usuario debe ser: Administrador o Auxiliar',
        })
        rol?: UserRol;
}
