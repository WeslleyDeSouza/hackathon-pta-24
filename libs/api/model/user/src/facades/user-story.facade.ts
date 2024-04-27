import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {UserEntity} from "../entities/user.entity";
import {Injectable} from "@nestjs/common";
import {UserStoryEntity} from "../entities/user-story.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserStoryFacade  {
  constructor(@InjectRepository( UserStoryEntity) protected userStoryEntity: Repository<UserStoryEntity>) {}

  create(tenantId:number,projectId:string,user:Partial<UserEntity>,data:Partial<UserStoryEntity>):Promise<UserStoryEntity>{
    const userStory = this.userStoryEntity.create()
    userStory.user = user as UserEntity;
    userStory.tenantId = tenantId
    userStory.projectId = projectId

    delete data.id
    delete data.user
    delete data.tenantId
    delete data.projectId

    Object.assign(userStory, data ||{})

    return this.userStoryEntity.save(userStory)
  }
}


