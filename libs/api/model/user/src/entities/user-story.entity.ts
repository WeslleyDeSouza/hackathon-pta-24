import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {UserEntity} from "./user.entity";

@Entity('user_story')
export class UserStoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: string;

  @Column()
  tenantId: string;

  @Column()
  description:string

  estimationValue:number // custom Value

  @Column({type:'varchar',length:10 , nullable:true})
  estimateUnit:number // custom Value

  @Column({type:'double',  nullable:true, comment:'if null, its the durschnitt'})
  estimateValue:number

  @ManyToOne(() => UserEntity, (user) => user.estimations)
  user: UserEntity
}
