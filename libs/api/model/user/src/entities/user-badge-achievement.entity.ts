import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, BeforeInsert, JoinColumn } from 'typeorm';
import {TenantBaseEntity} from "@hackathon-pta/api/model/_base";
import { UserEntity } from './user.entity';

@Entity('user_badge_achievement')
export class UserBadgeAchievementEntity extends TenantBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'uuid',
    nullable: false
  })
  badgeId: string;

  @CreateDateColumn()
  achievementAt:Date

  @ManyToOne(() => UserEntity, (user) => user.achievements)
  @JoinColumn({ name: "userId" })
  user: UserEntity
}
