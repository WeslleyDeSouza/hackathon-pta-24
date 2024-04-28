import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {UserEntity} from "../entities/user.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { UserActivityEntity } from '../entities/user-activity.entity';

@Injectable()
export class UserActivityFacade {
  constructor(@InjectRepository( UserActivityEntity) protected userActivityRepo: Repository<UserActivityEntity>) {}

  create(data:Partial<UserActivityEntity>):Promise<UserActivityEntity>{
    const userActivity = this.userActivityRepo.create()

    Object.assign(userActivity, data ||{})

    return this.userActivityRepo.save(userActivity)
  }

  findByUserId(userId: string): Promise<UserActivityEntity | null>{
    return this.userActivityRepo.findOne({
      where: {
        userId: userId
      }
    });
  }
}


