import { TenantFacade } from '@hackathon-pta/api/model/tenant';
import { UserFacade } from '@hackathon-pta/api/model/user';
import * as process from 'process';

const isDev:boolean = process.env['APP_ENV'] == 'development' || true //

export const DummyDataGenerator  = ({
  async tenantGenerate(  tenantFacade:TenantFacade ){

    if(!isDev)return;

    tenantFacade.create({
      tenantId:1,
      name:'PTA - Team Undefined'
    })

  }
})
