import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Config
  const configService: ConfigService = app.get(ConfigService);

  // Logging
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Genealogy Backend')
    .setDescription('The Genealogy API description')
    .setVersion('1.0')
    .addTag('People')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get<number>("PORT"));

  console.log("Listening on: " + await app.getUrl());
}
bootstrap();
