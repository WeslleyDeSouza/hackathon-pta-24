import { Module } from '@nestjs/common';

import {TypeOrmModule} from "@nestjs/typeorm";
import {ApiDatabaseConfig, createDataSource} from "@hackathon-pta/database";
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";
import {UserModule} from "./user/user.module";
import { ProjectModule } from './project/project.module';
import { ApiModelTenantModule, TenantFacade } from '@hackathon-pta/api/model/tenant';
import { ApiModelProjectModule } from '@hackathon-pta/api/model/project';
import { TenantModule } from './tenant/tenant.module';
import { BadgeModule } from './badge/badge.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      createDataSource(ApiDatabaseConfig,[
        ... ApiModelUserModule.dbConfig.entities as EntitySchema[],
        ... ApiModelProjectModule.dbConfig.entities as EntitySchema[],
        ... ApiModelTenantModule.dbConfig.entities as EntitySchema[]
      ])
    ),
    UserModule,
    ProjectModule,
    TenantModule,
    BadgeModule
  ],
})
export class ApplicationModule {

}
