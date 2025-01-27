import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculoDto, EstadoVehiculo } from './create-vehiculo.dto';
import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateVehiculoDto extends PartialType(CreateVehiculoDto) {
 
        @IsString()
        Tipo?: string;
    
        @IsString()
        Placa?: string;
    
        @IsEnum(EstadoVehiculo)
        Estado?: EstadoVehiculo;
    
        @IsNumber()
        @IsPositive()
        @Type(()=> Number)
        Transportador_id?: number;
}

