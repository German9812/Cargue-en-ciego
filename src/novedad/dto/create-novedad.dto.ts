import { IsString } from "class-validator";

export class CreateNovedadDto {

    @IsString()
    Nombre: string;
}
