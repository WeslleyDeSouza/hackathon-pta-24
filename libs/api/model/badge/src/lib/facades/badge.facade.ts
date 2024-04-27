import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {BadgeEntity} from "../entities/badge.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BadgeFacade  {
  constructor(@InjectRepository( BadgeEntity ) protected badgeRepo: Repository<BadgeEntity>) {}
  findByBadgeId(badgeId:string):Promise<BadgeEntity | null>
  {
    return this.badgeRepo.findOne({
      where:{
        badgeId
      }
    })
  }

  findAll():Promise<BadgeEntity[] | null>
  {
    return this.badgeRepo.find();
  }
}


