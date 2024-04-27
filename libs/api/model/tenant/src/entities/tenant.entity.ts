import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity, BeforeInsert } from 'typeorm';
import { TenantBaseEntity } from '@hackathon-pta/api/model/_base';
import { Exclude } from 'class-transformer';

@Entity('tenant')
export class TenantEntity extends TenantBaseEntity{
  @PrimaryGeneratedColumn()
  protected id:string

  @Column({
    type:"int",
    unsigned:true,
    nullable:false,
    unique:true
  })
  override tenantId: number;

  @Column({type:'varchar',nullable:false})
  name:string
}
