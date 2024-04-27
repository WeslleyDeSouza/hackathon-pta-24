import { Module } from '@nestjs/common';
import {DBBadgeConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import {BadgeFacade} from "./facades";

@Module({
  controllers: [],
  providers: [
    BadgeFacade
  ],
  imports:[
    TypeOrmModule.forFeature(DBBadgeConfig.entities as EntityClassOrSchema[])
  ],
  exports: [
    BadgeFacade
  ],
})
export class ApiModelBadgeModule {
  static dbConfig = DBBadgeConfig
}
