import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from 'typeorm';
import {UserEntity} from "./user.entity";

@Entity('user_story_estimation')
export class UserStoryEstimationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: string;

  @Column()
  tenantId: string;

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
}
