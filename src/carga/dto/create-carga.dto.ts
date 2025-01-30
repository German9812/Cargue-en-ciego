import { IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

export class CreateCargaDto {

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        type: Date,
        //example: '2021-10-05T00:00:00.000Z'
    })
    Fecha: Date;

    @IsNotEmpty()
    @IsEnum(['Sin iniciar', 'En verificación', 'Finalizado'],{
        message: 'Estado debe ser uno de: Sin iniciar, En verificación, Finalizado',
    })
    Estado: string;

    @IsNotEmpty()
    @ApiProperty({ 
        type: Number,
      //  example: 
    })
    vehiculoId: number;

    @IsNotEmpty()
    @ApiProperty({ 
        type: Number,
      //  example: 
    })
    muelleId: number;

    @IsOptional()
    @IsArray()
    @ApiProperty({
        type: Number,
        //example: [1,2,3]
    })
    productoIds?: number[];

    @IsOptional()
    @IsArray()
    @ApiProperty({ 
        type: Number,
        //example: [1,2,3]
    })
    detalleIds?: number[];
    
}
