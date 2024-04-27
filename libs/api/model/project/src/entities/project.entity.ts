import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity, BeforeInsert, Index } from 'typeorm';
import { TenantBaseEntity } from '@hackathon-pta/api/model/_base';

@Entity('project')
@Index(['tenantId'])
export class ProjectEntity extends TenantBaseEntity {
  override self = ProjectEntity;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type:'int'})
  projectId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @BeforeInsert()
  async beforeInsert(){
    await this.setLastEntryId('projectId')
  }
}
