import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {BadgeUserAchievementViewEntity} from "../entities/badge-user-achievement.view";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BadgeAchievementFacade  {
  constructor(@InjectRepository( BadgeUserAchievementViewEntity ) protected badgeRepo: Repository<BadgeUserAchievementViewEntity>) {

  }

  save(entity:Partial<BadgeUserAchievementViewEntity>){
   return  this.badgeRepo.save(entity)
  }

  listByUserId(userId:string):Promise<BadgeUserAchievementViewEntity[] | null>
  {
    return this.badgeRepo.find({
      where:{
        userId: userId
      }
    })
  }
}


