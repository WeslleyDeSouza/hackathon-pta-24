import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {ProjectEntity} from "../entities/project.entity";
import {Injectable} from "@nestjs/common";

import {InjectRepository} from "@nestjs/typeorm";
import { ProjectDtoCreate, ProjectDtoUpdate } from '../dto';

@Injectable()
export class ProjectFacade {
  constructor(@InjectRepository( ProjectEntity ) protected projectEntity: Repository<ProjectEntity>) {}
  list(tenantId:number){
   return  this.projectEntity.find(
      {
        where:{
          tenantId
        }
      }
    )
  }
  findById(tenantId:number,projectId:number){
   return  this.projectEntity.findOne(
      {
        where:{
          tenantId,projectId
        }
      }
    )
  }
  create(tenantId:number,dto:ProjectDtoCreate){
    this.projectEntity.save(
      Object.assign(
        this.projectEntity.create()
        ,{
          ...dto ,
          id:undefined,
          tenantId:tenantId,
          projectId:undefined,
        }
      )
    )
  }
  async update(tenantId:number,dto:ProjectDtoUpdate){
    const project = await this.findById(tenantId,dto.projectId)

    if(!project)return undefined

    delete dto['id'];
    delete dto['tenantId'];;
    delete dto['projectId'];

    this.projectEntity.save(
      Object.assign(
        project
        ,{
          ...dto ,

        }
      )
    )
  }
  async delete(tenantId:number,deleteId:number){
    const project = await this.findById(tenantId,deleteId)

    if(!project)return undefined



    return project.remove()
  }
}


