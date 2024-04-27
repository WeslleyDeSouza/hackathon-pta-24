import { Module } from '@nestjs/common';
import {DBTenantConfig} from "./db";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EntityClassOrSchema} from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { TenantFacade } from './facades';


@Module({
  controllers: [],
  providers: [
    TenantFacade
  ],
  imports:[
    TypeOrmModule.forFeature(DBTenantConfig.entities as EntityClassOrSchema[])
  ],
  exports: [
    TenantFacade
  ],
})
export class ApiModelTenantModule {
  static dbConfig = DBTenantConfig
}
