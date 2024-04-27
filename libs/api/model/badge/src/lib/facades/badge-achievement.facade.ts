import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {BadgeAchievementEntity} from "../entities/badge-achievement.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BadgeAchievementFacade  {
  constructor(@InjectRepository( BadgeAchievementEntity ) protected badgeRepo: Repository<BadgeAchievementEntity>) {

  }

  save(entity:Partial<BadgeAchievementEntity>){
   return  this.badgeRepo.save(entity)
  }

  listByUserId(userId:string):Promise<BadgeAchievementEntity[] | null>
  {
    return this.badgeRepo.find({
      where:{
        userId: userId
      }
    })
  }
}


