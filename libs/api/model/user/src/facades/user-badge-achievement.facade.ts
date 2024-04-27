import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { UserBadgeAchievementEntity } from '../entities/user-badge-achievement.entity';

@Injectable()
export class UserBadgeAchievementFacade  {
  constructor(@InjectRepository( UserBadgeAchievementEntity ) protected achievementRepo: Repository<UserBadgeAchievementEntity>) {}
  create(data:Partial<UserBadgeAchievementEntity>):Promise<UserBadgeAchievementEntity>{
    const user = this.achievementRepo.create();

    Object.assign(user, data ||{});

    return this.achievementRepo.save(user);
  }
}


