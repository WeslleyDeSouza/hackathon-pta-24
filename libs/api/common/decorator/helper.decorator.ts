import { CanActivate, createParamDecorator, ExecutionContext, Injectable } from "@nestjs/common";
import { TenantEntity } from "../../model/tenant/src/entities";
import { BaseEntity } from "typeorm";
import { UserEntity } from "../../model/user/src/entities";

@Injectable()
export class TenantMockGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const tenant = TenantEntity as any as typeof BaseEntity;
    request["tenant"] = await tenant.findOne({
      withDeleted: true,
      where: <any>{ tenantId: 1 },
    });
    return !!request["tenant"];
  }
}

@Injectable()
export class UserMockGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log(process.env["USER_MOCK_ID"]);
    const request = context.switchToHttp().getRequest();
    const tenant = UserEntity as any as typeof BaseEntity;
    request["user"] = await tenant.findOne({
      withDeleted: true,
      where: <any>{ userId: process.env["USER_MOCK_ID"] || "DUMMY-1-1-1" },
    });
    return !!request["user"];
  }
}

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

export const CurrentTenant = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.tenant;
});
