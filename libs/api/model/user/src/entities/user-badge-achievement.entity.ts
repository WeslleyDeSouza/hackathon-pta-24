import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, BeforeInsert} from 'typeorm';
import {UserEntity} from "./user.entity";
import {TenantBaseEntity} from "@hackathon-pta/api/model/_base";

@Entity('user_badge_achievement')
export class UserBadgeAchievementEntity extends TenantBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'uuid',
    nullable: false
  })
  userId: string;

  @Column({
    type: 'uuid',
    nullable: false
  })
  badgeId: string;

  @Column({
    type:"int",
    unsigned:true,
    nullable:false,
    unique:true
  })
  override tenantId: number;
}