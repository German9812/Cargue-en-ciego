import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportadorDto } from './create-transportador.dto';
import { IsString } from 'class-validator';

export class UpdateTransportadorDto extends PartialType(CreateTransportadorDto) {

    @IsString()
    Identificacion: string;

    @IsString()
    Nombre: string;

    @IsString()
    Telefono: string;
}   
