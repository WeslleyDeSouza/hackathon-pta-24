import { Module } from '@nestjs/common';

import {TypeOrmModule} from "@nestjs/typeorm";
import {ApiDatabaseConfig, createDataSource} from "@hackathon-pta/database";
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";
import {UserModule} from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      createDataSource(ApiDatabaseConfig,[
        ... ApiModelUserModule.dbConfig.entities as EntitySchema[]
      ])
    ),
    UserModule
  ],
})
export class ApplicationModule {}
