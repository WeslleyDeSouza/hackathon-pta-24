import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity} from 'typeorm';
import {UserStoryEntity} from "./user-story.entity";
import {UserStoryEstimationEntity} from "./user-story-estimation.entity";
import { UserBadgeAchievementEntity } from './user-badge-achievement.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
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

  @OneToMany(() => UserBadgeAchievementEntity, (achievement) => achievement.userId)
  achievements: UserBadgeAchievementEntity[]

  @OneToMany(() => UserStoryEstimationEntity, (estimation) => estimation.user)
  estimations: UserStoryEstimationEntity[]
}
