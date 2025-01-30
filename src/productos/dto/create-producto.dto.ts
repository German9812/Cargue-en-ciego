import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    @ApiProperty({
    type: String,
    example: ''
    })
    Cova: string;

    @IsString()
    @ApiProperty({
    type: String,
    example: ''
    })
    Nombre: string;

    @IsString()
    @ApiProperty({
    type: String,
    example: ''
    })
    Descripcion: string

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    @ApiProperty({
    type: Number,
    example: ''
    })
    Carga_id: number;
}
