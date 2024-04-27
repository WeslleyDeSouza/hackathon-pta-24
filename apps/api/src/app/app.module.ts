import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ApiDatabaseConfig, createDataSource} from "@hackathon-pta/database";
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      createDataSource(ApiDatabaseConfig,{

      })
    ),
    ApiModelUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
