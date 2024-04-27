import {TypeOrmModuleOptions} from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import {MixedList} from "typeorm/common/MixedList";
import {EntitySchema} from "typeorm/entity-schema/EntitySchema";

export function createDataSource (options:TypeOrmModuleOptions, entities?: MixedList<Function | string | EntitySchema>) {
  return Object.assign(options,{entities})
}
