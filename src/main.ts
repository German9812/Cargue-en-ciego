import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
<<<<<<< HEAD
=======

>>>>>>> rama2

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true, 
        forbidNonWhitelisted: true, 
        transform: true, 
    }),
  );

  const config = new DocumentBuilder()
<<<<<<< HEAD
    .setTitle('Documentacion API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory)


=======
  .setTitle('Documentacion API')
  .setDescription('')
  .setVersion('1.0')
  .addTag('')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory)
>>>>>>> rama2

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
