import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {UserEntity} from "../entities/user.entity";
import {Injectable} from "@nestjs/common";
import {UserStoryEntity} from "../entities/user-story.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserFacade  {
  constructor(@InjectRepository( UserEntity ) protected userRepo: Repository<UserEntity>) {}
  findUserById(userId:string):Promise<UserEntity | null>
  {
    return this.userRepo.findOne({
      where:{
        userId
      }
    })
  }
  create(data:Partial<UserEntity>):Promise<UserEntity>{
    const user = this.userRepo.create();

    Object.assign(user, data ||{});

    return this.userRepo.save(user);
  }

  async update(id:string,data:Partial<UserEntity>):Promise<UserEntity | null>{

    const currentUser  = await this.findUserById(id)
    if(!currentUser){
      return null
    }

    delete data.userId;
    Object.assign(currentUser, data ||{});

    this.userRepo.update(id,currentUser)

    return  currentUser
  }
}


