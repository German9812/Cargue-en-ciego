import { IsString } from "class-validator";

export class CreateSitioDto {

    @IsString()
    Nombre: string;
}
