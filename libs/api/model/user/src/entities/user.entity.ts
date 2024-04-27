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

  @OneToMany(() => UserStoryEntity, (stories) => stories.user)
  stories: UserStoryEntity[]

  @ManyToOne(() => UserStoryEstimationEntity, (estimation) => estimation.user)
  estimations: UserStoryEstimationEntity[]
}
