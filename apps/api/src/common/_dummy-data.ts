import { TenantFacade } from '@hackathon-pta/api/model/tenant';
import { UserFacade, UserStoryFacade } from '@hackathon-pta/api/model/user';
import * as process from 'process';
import { BadgeEntity } from '../../../../libs/api/model/badge/src/lib/entities';
import { BadgeFacade } from '@hackathon-pta/api/model/badge';
import { UserBadgeAchievementFacade } from '@hackathon-pta/api/model/user';
import { UserActivityFacade } from 'libs/api/model/user/src/facades/user-activity.facade';
import ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { ProjectEntity } from '../../../../libs/api/model/project/src/entities';
import { ProjectFacade } from '@hackathon-pta/api/model/project';
import { UserStoryEntity } from '../../../../libs/api/model/user/src/entities/user-story.entity';

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
   return userFace.create({
      userId:'DUMMY-1-1-1',
      lastName:'Musterman',
      firstName:'Max',
      email:'max.musterman@pta.ch'
    })
  },
  async projectGenerate(projectFacade:ProjectFacade){
    const projects: Partial<ProjectEntity>[] = [
      {
        title: 'PTA',
        tenantId:1,
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
      },
      {
        title: 'Esostat',
        tenantId: 1,
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
      },
      {
        title: '7-Summit',
        tenantId: 1,
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
      },
      {
        title: 'SIS-Portal Monorepo',
        tenantId: 1,
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
      },
    ]
    Promise.all(projects.map((b,i) =>
      {
        const model = ProjectEntity.create(b) as ProjectEntity;
        model.setSkipSetLastEntryId()
        model.projectId = i + 1
        return model.save().catch(()=> null)
      }
    ))
  },
  async userStoryGenerate(userStoryFacade:UserStoryFacade){
    const userStories: Partial<UserStoryEntity>[] = [
        {
          "title": "RealTime Form Validation",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form."
        },
        {
          "title": "Mobile Responsive Design",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device."
        },
        {
          "title": "Password Strength Indicator",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user creating an account, I want a password strength indicator so that I can create a secure password."
        },
        {
          "title": "Drag and Drop File Upload",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier."
        },
        {
          "title": "Dark Mode Toggle",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain."
        },
        {
          "title": "Language Preference Setting",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to set my language preference to improve my experience with the interface."
        },
        {
          "title": "Two-Factor Authentication Setup",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to enable two-factor authentication to secure my account."
        },
        {
          "title": "User Profile Customization",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to customize my profile so that I can display preferred information."
        },
        {
          "title": "Interactive Data Visualizations",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want interactive data visualizations so that I can understand complex data easily."
        },
        {
          "title": "Automated Report Generation",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want reports to be generated automatically so that I can save time."
        },
        {
          "title": "Feedback System",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted."
        },
        {
          "title": "Live Chat Support",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want access to live chat support so that I can resolve issues quickly."
        },
        {
          "title": "Order Tracking",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to track my orders so that I know when to expect delivery."
        },
        {
          "title": "Secure Payment Gateway",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want a secure payment gateway to ensure my transaction details are safe."
        },
        {
          "title": "Notification Preferences",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to customize my notification preferences to receive relevant alerts."
        },
        {
          "title": "Multi-Currency Support",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want to view prices in different currencies so that I can understand costs in my local currency."
        },
        {
          "title": "Product Recommendation Engine",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user, I want personalized product recommendations to enhance my shopping experience."
        },
        {
          "title": "Accessible User Interface",
          "tenantId": 1,
          "projectId": 1,
          "description": "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily."
        },
        {
          "title": "RealTime Form Validation",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form."
        },
        {
          "title": "Mobile Responsive Design",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device."
        },
        {
          "title": "Password Strength Indicator",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user creating an account, I want a password strength indicator so that I can create a secure password."
        },
        {
          "title": "Drag and Drop File Upload",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier."
        },
        {
          "title": "Dark Mode Toggle",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain."
        },
        {
          "title": "Language Preference Setting",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to set my language preference to improve my experience with the interface."
        },
        {
          "title": "Two-Factor Authentication Setup",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to enable two-factor authentication to secure my account."
        },
        {
          "title": "User Profile Customization",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to customize my profile so that I can display preferred information."
        },
        {
          "title": "Interactive Data Visualizations",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want interactive data visualizations so that I can understand complex data easily."
        },
        {
          "title": "Automated Report Generation",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want reports to be generated automatically so that I can save time."
        },
        {
          "title": "Feedback System",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted."
        },
        {
          "title": "Live Chat Support",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want access to live chat support so that I can resolve issues quickly."
        },
        {
          "title": "Order Tracking",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to track my orders so that I know when to expect delivery."
        },
        {
          "title": "Secure Payment Gateway",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want a secure payment gateway to ensure my transaction details are safe."
        },
        {
          "title": "Notification Preferences",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to customize my notification preferences to receive relevant alerts."
        },
        {
          "title": "Multi-Currency Support",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want to view prices in different currencies so that I can understand costs in my local currency."
        },
        {
          "title": "Product Recommendation Engine",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user, I want personalized product recommendations to enhance my shopping experience."
        },
        {
          "title": "Accessible User Interface",
          "tenantId": 1,
          "projectId": 2,
          "description": "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily."
        },
        {
          "title": "RealTime Form Validation",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form."
        },
        {
          "title": "Mobile Responsive Design",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device."
        },
        {
          "title": "Password Strength Indicator",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user creating an account, I want a password strength indicator so that I can create a secure password."
        },
        {
          "title": "Drag and Drop File Upload",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier."
        },
        {
          "title": "Dark Mode Toggle",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain."
        },
        {
          "title": "Language Preference Setting",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to set my language preference to improve my experience with the interface."
        },
        {
          "title": "Two-Factor Authentication Setup",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to enable two-factor authentication to secure my account."
        },
        {
          "title": "User Profile Customization",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to customize my profile so that I can display preferred information."
        },
        {
          "title": "Interactive Data Visualizations",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want interactive data visualizations so that I can understand complex data easily."
        },
        {
          "title": "Automated Report Generation",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want reports to be generated automatically so that I can save time."
        },
        {
          "title": "Feedback System",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted."
        },
        {
          "title": "Live Chat Support",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want access to live chat support so that I can resolve issues quickly."
        },
        {
          "title": "Order Tracking",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to track my orders so that I know when to expect delivery."
        },
        {
          "title": "Secure Payment Gateway",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want a secure payment gateway to ensure my transaction details are safe."
        },
        {
          "title": "Notification Preferences",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to customize my notification preferences to receive relevant alerts."
        },
        {
          "title": "Multi-Currency Support",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want to view prices in different currencies so that I can understand costs in my local currency."
        },
        {
          "title": "Product Recommendation Engine",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user, I want personalized product recommendations to enhance my shopping experience."
        },
        {
          "title": "Accessible User Interface",
          "tenantId": 1,
          "projectId": 3,
          "description": "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily."
        },
        {
          "title": "RealTime Form Validation",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form."
        },
        {
          "title": "Mobile Responsive Design",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device."
        },
        {
          "title": "Password Strength Indicator",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user creating an account, I want a password strength indicator so that I can create a secure password."
        },
        {
          "title": "Drag and Drop File Upload",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier."
        },
        {
          "title": "Dark Mode Toggle",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain."
        },
        {
          "title": "Language Preference Setting",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to set my language preference to improve my experience with the interface."
        },
        {
          "title": "Two-Factor Authentication Setup",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to enable two-factor authentication to secure my account."
        },
        {
          "title": "User Profile Customization",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to customize my profile so that I can display preferred information."
        },
        {
          "title": "Interactive Data Visualizations",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want interactive data visualizations so that I can understand complex data easily."
        },
        {
          "title": "Automated Report Generation",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want reports to be generated automatically so that I can save time."
        },
        {
          "title": "Feedback System",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted."
        },
        {
          "title": "Live Chat Support",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want access to live chat support so that I can resolve issues quickly."
        },
        {
          "title": "Order Tracking",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to track my orders so that I know when to expect delivery."
        },
        {
          "title": "Secure Payment Gateway",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want a secure payment gateway to ensure my transaction details are safe."
        },
        {
          "title": "Notification Preferences",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to customize my notification preferences to receive relevant alerts."
        },
        {
          "title": "Multi-Currency Support",
          "tenantId": 1,
          "projectId": 4,
          "description": "As a user, I want to view prices in different currencies so that I can understand costs in my local currency."
        }
      ]
    Promise.all(userStories.map((b,i) =>
      {
        const model = UserStoryEntity.create(b) as UserStoryEntity;
        model.setSkipSetLastEntryId()
        model.userStoryId = i + 1
        return model.save().catch(()=> null)
      }
    ))
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
        user:<any>{
         userId: 'DUMMY-1-1-1'
     }
    }).catch(()=> null)
  },
  async userActivityGenerate( userActivityFacade :UserActivityFacade){
    if(!isDev)return;
    userActivityFacade.create({
        userId: 'DUMMY-1-1-1',
        activities: [{
          name: "workload_hours",
          progress: 50
        }]
    }).catch(()=>null)
  },
})
