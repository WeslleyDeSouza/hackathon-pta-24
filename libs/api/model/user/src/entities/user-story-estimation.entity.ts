import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, BeforeInsert} from 'typeorm';
import {UserEntity} from "./user.entity";
import {TenantBaseEntity} from "@hackathon-pta/api/model/_base";

@Entity('user_story_estimation')
export class UserStoryEstimationEntity extends TenantBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type:'int',
    unsigned:true
  })
  estimationId: number;

  @Column()
  projectId: string;

  @Column({type:'varchar',length:50})
  title:string

  @Column({type:'text',nullable:true})
  description:string

  @Column({type:"double", nullable:false})
  estimateValue:number

  @CreateDateColumn()
  createdAt:Date

  @ManyToOne(() => UserEntity, (user) => user.estimations)
  user: UserEntity

  @BeforeInsert()
  async beforeInsert(){
    await this.setLastEntryId('estimationId')
  }
}
