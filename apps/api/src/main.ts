import 'dotenv/config'
import {INestApplication, Logger} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import {ApplicationModule} from './module/application.module';
import fs from "fs";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  swagger(app)

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

}

bootstrap();


// Swagger Config
const swagger = (app: INestApplication) => {
  if (process.env.APP_ENV == 'production') return;

  const config = new DocumentBuilder()
    .setTitle('ELO')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  try {
    fs.writeFileSync(
      './config/swagger-spec.json',
      JSON.stringify(document).replace(/Controller/g, '')
    );

    require('child_process').exec('npm run ng-swagger');
  } catch (e) {
    console.error(e);
  }
};
