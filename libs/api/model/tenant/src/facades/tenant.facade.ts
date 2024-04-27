import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { TenantEntity } from '../entities';

@Injectable()
export class TenantFacade {
  constructor(@InjectRepository( TenantEntity ) protected tenantRepo: Repository<TenantEntity>) {}

  create(data:Partial<TenantEntity>):Promise<TenantEntity>{
    const tenant = this.tenantRepo.create();

    Object.assign(tenant, data ||{});

    return this.tenantRepo.save(tenant);
  }

}


