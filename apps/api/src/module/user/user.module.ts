import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {ApiModelUserModule} from "@hackathon-pta/api/model/user";

@Module({
  imports: [
    ApiModelUserModule
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
