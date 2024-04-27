import { TenantFacade } from '@hackathon-pta/api/model/tenant';
import { UserFacade } from '@hackathon-pta/api/model/user';
import * as process from 'process';
import { BadgeEntity } from '../../../../libs/api/model/badge/src/lib/entities';
import { BadgeFacade } from '@hackathon-pta/api/model/badge';
import { UserBadgeAchievementFacade } from '@hackathon-pta/api/model/user';

const isDev:boolean = process.env['APP_ENV'] == 'development' || true //

export const DummyDataGenerator  = ({
  async tenantGenerate( tenantFacade:TenantFacade ){

    if(!isDev)return;

    tenantFacade.create({
      tenantId:1,
      name:'PTA Team Undefined'
    }).catch(()=> null)
  },
  async userGenerate( userFace :UserFacade){
    if(!isDev)return;
    userFace.create({
      userId:'DUMMY-1-1-1',
      lastName:'Musterman',
      firstName:'Max',
      email:'max.musterman@pta.ch'
    })
  },
  async badgeGenerate(badgeFacade:BadgeFacade){
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
    Promise.all(badges.map((b,i) =>
      badgeFacade.save({ ...b,badgeId:'DUMMY_'+i+1 }).catch(()=> null)
    ))
  },
  async achievementGenerate( achievementFacadeFace :UserBadgeAchievementFacade){
    if(!isDev)return;
    achievementFacadeFace.create({
        badgeId: 'DUMMY_01',
        tenantId: 1,
        userId: 'DUMMY-1-1-1'
    }).catch(()=> null)
  },
})
