import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {UserEntity} from "../entities/user.entity";
import {Injectable} from "@nestjs/common";
import {UserStoryEntity} from "../entities/user-story.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserStoryFacade  {
  constructor(@InjectRepository( UserStoryEntity) protected userStoryEntity: Repository<UserStoryEntity>) {}

  listByProjectId(tenantId:number,projectId:number){
   return this.userStoryEntity.find({
      where:{
        tenantId,
        projectId
      }
    })
  }

  create(tenantId:number,projectId:number,user:Partial<UserEntity>,data:Partial<UserStoryEntity>):Promise<UserStoryEntity>{
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

  async update(tenantId:number,projectId:number,data:Partial<UserStoryEntity>):Promise<UserStoryEntity>{
    if(!data.userStoryId)throw Error('userStoryId not Provided')

    let userStory = await this.findById(tenantId,projectId,data.userStoryId)

    if(!userStory?.userStoryId)throw Error('userStoryId not valid')


    delete data.id
    delete data.user
    delete data.tenantId
    delete data.projectId

    userStory = Object.assign(userStory, data ||{})

    return this.userStoryEntity.save(userStory)
  }


  findById(tenantId:number,projectId:number,userStoryId:number){
    return this.userStoryEntity.findOne({
      where:{
        tenantId,projectId,userStoryId
      }
    })
  }

  async setStateForReview(tenantId:number,projectId:number,id:number,state:boolean):Promise<boolean>{
    const userStory = await this.findById(tenantId,projectId,id);
    if(!userStory)return false;
    userStory.stateOpenForReview = state ? new Date() : null;
    return userStory.save().then(()=> true)
  }

}


