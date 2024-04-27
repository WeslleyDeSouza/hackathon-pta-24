import { Module } from '@nestjs/common';
import {DBUserConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { ProjectFacade } from './facades';


@Module({
  controllers: [],
  providers: [
    ProjectFacade
  ],
  imports:[
    TypeOrmModule.forFeature(DBUserConfig.entities as EntityClassOrSchema[])
  ],
  exports: [

  ],
})
export class ApiModelProjectModule {
  static dbConfig = DBUserConfig
}
