import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, Index, Repository} from 'typeorm';
import {BadgeEntity} from "../entities/badge.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

const badges: Partial<BadgeEntity>[] = [
  {
    title: 'First Step',
    description: 'This badge is earned by submitting your first estimation of a user-story',
    tag: 'first_step',
    activityValue: 1,
    activityName: 'estimation'
  },
  {
    title: 'Totally Accurate',
    description: 'This badge shows that your estimate was perfectly estimated since the execution took exactly that amount.',
    tag: 'totally_accurate',
    activityValue: 1,
    activityName: 'correct_estimation'
  },
  {
    title: 'Estimation Veteran',
    description: 'WOW you have estimated over 100 stories! Keep up the good work.',
    tag: 'estimation_veteran',
    activityValue: 100,
    activityName: 'estimation'
  },
  {
    title: 'Thumbs Up',
    description: 'Your co-workers liked your estimation, since your estimation was taken for the user story',
    tag: 'thumbs_up',
    activityValue: 1,
    activityName: 'chosen_estimation'
  },
  {
    title: 'A crown-load of work',
    description: 'You participated in a project that was estimated over 100 hours',
    tag: 'crown',
    activityValue: 100,
    activityName: 'workload_hours'
  },
  {
    title: 'All good things are 3',
    description: 'You participated in a in 3 projects',
    tag: 'three',
    activityValue: 3,
    activityName: 'project_participation'
  },
]

@Injectable()
export class BadgeFacade  {
  constructor(@InjectRepository( BadgeEntity ) protected badgeRepo: Repository<BadgeEntity>) {
    badges.forEach(b => {
      badgeRepo.findOne({
        where: {
          title: b.title ?? ''
      }}).then(r => {
        if (r === null) {
          const badge = badgeRepo.create(b);
          Object.assign(badge, b);
          badgeRepo.save(badge);
        }
      })
    });
  }
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


