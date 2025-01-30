import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importa el decorador ApiProperty

export class CreateTransportadorDto {

  @IsString()
  @ApiProperty({
    //description: 'Identificación del transportador', // Descripción de la propiedad
    type: String, // Tipo de dato
    example: '', // Ejemplo de valor para Swagger
  })
  Identificacion: string;

  @IsString()
  @ApiProperty({
    //description: 'Nombre del transportador', // Descripción de la propiedad
    type: String, // Tipo de dato
    example: '', // Ejemplo de valor para Swagger
  })
  Nombre: string;

  @IsString()
  @ApiProperty({
    //description: 'Número de teléfono del transportador', // Descripción de la propiedad
    type: String, // Tipo de dato
    example: '', // Ejemplo de valor para Swagger
  })
  Telefono: string;
}
