import 'dotenv/config'
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import {ApplicationModule} from './module/application.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
