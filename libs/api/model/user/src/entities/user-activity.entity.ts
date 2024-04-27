import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity, BeforeInsert} from 'typeorm';
import {UserStoryEntity} from "./user-story.entity";
import {UserStoryEstimationEntity} from "./user-story-estimation.entity";
import { UserBadgeAchievementEntity } from './user-badge-achievement.entity';
import { TenantBaseEntity } from '@hackathon-pta/api/model/_base';

@Entity('user_activity')
export class UserActivityEntity extends TenantBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid')
  userId: string;

  @Column("simple-json")
  activities: [{ name: string; progress: number }]

  @BeforeInsert()
  async beforeInsert(){
    await this.setLastEntryId('id')
  }
}
