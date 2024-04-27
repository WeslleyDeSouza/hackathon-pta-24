import { TenantEntity } from '../entities';
import { ApiParam, ApiProperty } from '@nestjs/swagger';


export class TenantDTOCreate extends TenantEntity {
  @ApiProperty()
  override tenantId:number
  @ApiProperty()
  override name:string
}

export class TenantDTOUpdate extends TenantDTOCreate {

}
