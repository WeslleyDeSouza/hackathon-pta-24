import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { IUser, UserDtoResponse, UserFacade } from "@hackathon-pta/api/model/user";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  CurrentTenant,
  CurrentUser,
  TenantMockGuard,
  UserMockGuard,
} from "@hackathon-pta/api/common";

@Controller("user")
@ApiTags("User")
@UseGuards(UserMockGuard)
export class UserController {
  constructor(private readonly userService: UserFacade) {}

  @Get("")
  @ApiOkResponse({
    description: "Get Current User record",
    type: UserDtoResponse,
    isArray: false,
  })
  getCurrentUser(@CurrentUser() currentUser: IUser): IUser {
    return currentUser;
  }

  @Get("list")
  @ApiOkResponse({
    description: "Get Current User record",
    type: UserDtoResponse,
    isArray: true,
  })
  getUsers(@CurrentUser() currentUser: IUser) {
    return this.userService.list();
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Get User record",
    type: UserDtoResponse,
  })
  getUser(@Param("id") userId: string): Promise<UserDtoResponse> {
    return this.userService.findUserById(userId);
  }

  @Get("switch/:userId")
  @ApiOkResponse({
    description: "Get Current User record",
    type: UserDtoResponse,
    isArray: false,
  })
  switchUser(@Param("userId") userId: string) {
    process.env["USER_MOCK_ID"] = userId;
    return { userId };
  }
}
