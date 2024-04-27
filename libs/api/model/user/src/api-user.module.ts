import { Module } from '@nestjs/common';
import {DBUserConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";

@Module({
  controllers: [],
  providers: [],
  imports:[
    TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])
  ],
  exports: [],
})
export class ApiModelUserModule {
  static dbConfig = DBUserConfig
}
