import { TenantFacade } from '@hackathon-pta/api/model/tenant';
import { UserFacade } from '@hackathon-pta/api/model/user';
import * as process from 'process';

const isDev:boolean = process.env['APP_ENV'] == 'development' || true //

export const DummyDataGenerator  = ({
  async tenantGenerate( tenantFacade:TenantFacade ){

    if(!isDev)return;

    tenantFacade.create({
      tenantId:1,
      name:'PTA Team Undefined'
    }).catch(()=> null)
  },
  async userGenerate( userFace :UserFacade){
    if(!isDev)return;
    userFace.create({
      userId:'DUMMY-1-1-1',
      lastName:'Musterman',
      firstName:'Max',
      email:'max.musterman@pta.ch'
    })
  }
})
