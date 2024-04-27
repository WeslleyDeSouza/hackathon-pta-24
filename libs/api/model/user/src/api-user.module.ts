import { Module } from '@nestjs/common';
import {DBUserConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import {UserFacade} from "./facades";

@Module({
  controllers: [],
  providers: [
    UserFacade,

  ],
  imports:[
    TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])
  ],
  exports: [
    UserFacade
  ],
})
export class ApiModelUserModule {
  static dbConfig = DBUserConfig
}
