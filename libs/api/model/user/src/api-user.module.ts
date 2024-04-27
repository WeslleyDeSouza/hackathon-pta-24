import { Module } from '@nestjs/common';
import {DBUserConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import {UserFacade, UserStoryFacade} from "./facades";

@Module({
  controllers: [],
  providers: [
    UserFacade,
    UserStoryFacade,

  ],
  imports:[
    TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])
  ],
  exports: [
    UserFacade,UserStoryFacade
  ],
})
export class ApiModelUserModule {
  static dbConfig = DBUserConfig
}
