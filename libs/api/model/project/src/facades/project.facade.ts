import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {ProjectEntity} from "../entities/project.entity";
import {Injectable} from "@nestjs/common";

import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProjectFacade {
  constructor(@InjectRepository( ProjectEntity ) protected projectEntity: Repository<ProjectEntity>) {}

}


