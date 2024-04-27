import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ApiDatabaseConfig, createDataSource} from "@hackathon-pta/database";
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      createDataSource(ApiDatabaseConfig,[
        ... ApiModelUserModule.dbConfig.entities as EntitySchema[]
      ])
    ),
    ApiModelUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
