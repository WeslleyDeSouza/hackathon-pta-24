import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {UserStoryEntity} from "./user-story.entity";
import {UserStoryEstimationEntity} from "./user-story-estimation.entity";

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({type:"varchar",length:50,nullable:false,unique:true})
  email: string;

  @OneToMany(() => UserStoryEntity, (stories) => stories.user)
  stories: UserStoryEntity[]

  @OneToMany(() => UserStoryEstimationEntity, (estimation) => estimation.user)
  estimations: UserStoryEstimationEntity[]
}
