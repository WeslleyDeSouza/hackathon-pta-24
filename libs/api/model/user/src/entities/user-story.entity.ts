import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index} from 'typeorm';
import {UserEntity} from "./user.entity";
import {TenantBaseEntity} from "@hackathon-pta/api/model/_base";

@Entity('user_story')
@Index(['tenantId'])
@Index(['tenantId','projectId'])
export class UserStoryEntity extends TenantBaseEntity {
  protected override self = UserStoryEntity;

  @PrimaryGeneratedColumn()
  id: string;

  @Column({unique:true,type:'int'})
  userStoryId: number;

  @Column({type:'int',nullable:false})
  projectId: number;

  @Column()
  title:string

  @Column({type:'text',nullable:true})
  description:string

  @Column({type:'varchar',length:10 , nullable:true})
  estimateUnit:number // custom Value

  @Column({type:'double',  nullable:true, comment:'if null, its the durschnitt'})
  estimateValue:number

  @ManyToOne(() => UserEntity, (user) => user.estimations)
  user: UserEntity

  @BeforeInsert()
  async beforeInsert(){
    await this.setLastEntryId('userStoryId')
  }
}


