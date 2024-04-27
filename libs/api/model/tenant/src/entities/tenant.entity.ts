import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity, BeforeInsert } from 'typeorm';
import { TenantBaseEntity } from '@hackathon-pta/api/model/_base';
import { Exclude } from 'class-transformer';

@Entity('tenant')
export class TenantEntity extends TenantBaseEntity {
  @PrimaryGeneratedColumn()
  protected id:string

  @Column({type:'varchar',nullable:false})
  name:string

  @BeforeInsert()
  async beforeInsert(){
    await this.setLastEntryId('tenantId')
  }
}
