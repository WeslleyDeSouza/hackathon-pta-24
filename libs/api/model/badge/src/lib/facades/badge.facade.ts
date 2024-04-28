import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {BadgeEntity} from "../entities/badge.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BadgeFacade  {
  constructor(@InjectRepository( BadgeEntity ) protected badgeRepo: Repository<BadgeEntity>) {

  }

  save(entity:Partial<BadgeEntity>){
   return  this.badgeRepo.save(entity)
  }

  findByBadgeId(badgeId:string):Promise<BadgeEntity | null>
  {
    return this.badgeRepo.findOne({
      where:{
        badgeId
      }
    })
  }

  findByActivityName(activityName: string): Promise<BadgeEntity[]> {
    return this.badgeRepo.find({
      where: {
        activityName: activityName
      }
    });
  }

  findAll():Promise<BadgeEntity[] | null>
  {
    return this.badgeRepo.find();
  }
}


