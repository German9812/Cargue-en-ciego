import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSitioDto {

    @IsString()
    @ApiProperty({
    type: String,
    example: ''
    })
    Nombre: string;
}
