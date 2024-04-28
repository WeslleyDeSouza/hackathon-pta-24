import { TenantFacade } from "@hackathon-pta/api/model/tenant";
import { UserFacade, UserStoryFacade } from "@hackathon-pta/api/model/user";
import * as process from "process";
import { BadgeEntity } from "../../../../libs/api/model/badge/src/lib/entities";
import { BadgeFacade } from "@hackathon-pta/api/model/badge";
import { UserBadgeAchievementFacade } from "@hackathon-pta/api/model/user";
import { UserActivityFacade } from "libs/api/model/user/src/facades/user-activity.facade";
import ts from "@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript";
import { ProjectEntity } from "../../../../libs/api/model/project/src/entities";
import { ProjectFacade } from "@hackathon-pta/api/model/project";
import { UserStoryEntity } from "../../../../libs/api/model/user/src/entities/user-story.entity";

const isDev: boolean = process.env["APP_ENV"] == "development" || true; //

export const DummyDataGenerator = {
  async tenantGenerate(tenantFacade: TenantFacade) {
    if (!isDev) return;

    tenantFacade
      .create({
        tenantId: 1,
        name: "PTA Team Undefined",
      })
      .catch(() => null);
  },
  async userGenerate(userFace: UserFacade) {
    if (!isDev) return;
    const users = [
      {
        userId: "DUMMY-1-1-1",
        lastName: "Musterman",
        firstName: "Max",
        email: "max.musterman@pta.ch",
      },
      {
        firstName: "Max",
        lastName: "Mustermann",
        userId: "DUMMY-1-1-2",
        email: "max.mustermann@example.com",
      },
      {
        firstName: "Julia",
        lastName: "Schmidt",
        userId: "DUMMY-1-1-3",
        email: "julia.schmidt@example.com",
      },
      {
        firstName: "Leon",
        lastName: "Müller",
        userId: "DUMMY-1-1-4",
        email: "leon.mueller@example.com",
      },
      {
        firstName: "Sophie",
        lastName: "Fischer",
        userId: "DUMMY-1-1-5",
        email: "sophie.fischer@example.com",
      },
      {
        firstName: "Alexander",
        lastName: "Weber",
        userId: "DUMMY-1-1-6",
        email: "alexander.weber@example.com",
      },
      {
        firstName: "Mia",
        lastName: "Schneider",
        userId: "DUMMY-1-1-7",
        email: "mia.schneider@example.com",
      },
      {
        firstName: "Elias",
        lastName: "Hoffmann",
        userId: "DUMMY-1-1-8",
        email: "elias.hoffmann@example.com",
      },
      {
        firstName: "Emma",
        lastName: "Koch",
        userId: "DUMMY-1-1-9",
        email: "emma.koch@example.com",
      },
      {
        firstName: "Noah",
        lastName: "Bauer",
        userId: "DUMMY-1-1-10",
        email: "noah.bauer@example.com",
      },
      {
        firstName: "Anna",
        lastName: "Schulz",
        userId: "DUMMY-1-1-11",
        email: "anna.schulz@example.com",
      },
      {
        firstName: "Ben",
        lastName: "Becker",
        userId: "DUMMY-1-1-12",
        email: "ben.becker@example.com",
      },
      {
        firstName: "Lara",
        lastName: "Hofmann",
        userId: "DUMMY-1-1-13",
        email: "lara.hofmann@example.com",
      },
      {
        firstName: "Finn",
        lastName: "Wagner",
        userId: "DUMMY-1-1-14",
        email: "finn.wagner@example.com",
      },
      {
        firstName: "Emilia",
        lastName: "Krause",
        userId: "DUMMY-1-1-15",
        email: "emilia.krause@example.com",
      },
      {
        firstName: "Paul",
        lastName: "Schwarz",
        userId: "DUMMY-1-1-16",
        email: "paul.schwarz@example.com",
      },
      {
        firstName: "Lina",
        lastName: "Neumann",
        userId: "DUMMY-1-1-17",
        email: "lina.neumann@example.com",
      },
      {
        firstName: "Jonas",
        lastName: "Schmitt",
        userId: "DUMMY-1-1-18",
        email: "jonas.schmitt@example.com",
      },
      {
        firstName: "Luisa",
        lastName: "Meier",
        userId: "DUMMY-1-1-19",
        email: "luisa.meier@example.com",
      },
      {
        firstName: "David",
        lastName: "Schubert",
        userId: "DUMMY-1-1-20",
        email: "david.schubert@example.com",
      },
      {
        firstName: "Marie",
        lastName: "Schulze",
        userId: "DUMMY-1-1-21",
        email: "marie.schulze@example.com",
      },
      {
        firstName: "Tom",
        lastName: "Winter",
        userId: "DUMMY-1-1-22",
        email: "tom.winter@example.com",
      },
      {
        firstName: "Sara",
        lastName: "Lang",
        userId: "DUMMY-1-1-23",
        email: "sara.lang@example.com",
      },
      {
        firstName: "Niklas",
        lastName: "Brandt",
        userId: "DUMMY-1-1-24",
        email: "niklas.brandt@example.com",
      },
      {
        firstName: "Clara",
        lastName: "Baumann",
        userId: "DUMMY-1-1-25",
        email: "clara.baumann@example.com",
      },
      {
        firstName: "Oliver",
        lastName: "Frank",
        userId: "DUMMY-1-1-26",
        email: "oliver.frank@example.com",
      },
      {
        firstName: "Helena",
        lastName: "Krüger",
        userId: "DUMMY-1-1-27",
        email: "helena.krueger@example.com",
      },
      {
        firstName: "Julian",
        lastName: "Vogel",
        userId: "DUMMY-1-1-28",
        email: "julian.vogel@example.com",
      },
      {
        firstName: "Laura",
        lastName: "Jung",
        userId: "DUMMY-1-1-29",
        email: "laura.jung@example.com",
      },
      {
        firstName: "Tim",
        lastName: "Hartmann",
        userId: "DUMMY-1-1-30",
        email: "tim.hartmann@example.com",
      },
      {
        firstName: "Nina",
        lastName: "König",
        userId: "DUMMY-1-1-31",
        email: "nina.koenig@example.com",
      },
    ];

    return Promise.all(users.map(user => userFace.create(user).catch(() => null)));
  },
  async projectGenerate(projectFacade: ProjectFacade) {
    const projects: Partial<ProjectEntity>[] = [
      {
        title: "PTA",
        tenantId: 1,
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      },
      {
        title: "Esostat",
        tenantId: 1,
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      },
      {
        title: "7-Summit",
        tenantId: 1,
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      },
      {
        title: "SIS-Portal Monorepo",
        tenantId: 1,
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      },
    ];
    Promise.all(
      projects.map((b, i) => {
        const model = ProjectEntity.create(b) as ProjectEntity;
        model.setSkipSetLastEntryId();
        model.projectId = i + 1;
        return model.save().catch(() => null);
      })
    );
  },
  async userStoryGenerate(userStoryFacade: UserStoryFacade) {
    const userStories: Partial<UserStoryEntity>[] = [
      {
        title: "RealTime Form Validation",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form.",
      },
      {
        title: "Mobile Responsive Design",
        tenantId: 1,
        projectId: 1,
        description:
          "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device.",
      },
      {
        title: "Password Strength Indicator",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user creating an account, I want a password strength indicator so that I can create a secure password.",
      },
      {
        title: "Drag and Drop File Upload",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier.",
      },
      {
        title: "Dark Mode Toggle",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain.",
      },
      {
        title: "Language Preference Setting",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to set my language preference to improve my experience with the interface.",
      },
      {
        title: "Two-Factor Authentication Setup",
        tenantId: 1,
        projectId: 1,
        description: "As a user, I want to enable two-factor authentication to secure my account.",
      },
      {
        title: "User Profile Customization",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to customize my profile so that I can display preferred information.",
      },
      {
        title: "Interactive Data Visualizations",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want interactive data visualizations so that I can understand complex data easily.",
      },
      {
        title: "Automated Report Generation",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want reports to be generated automatically so that I can save time.",
      },
      {
        title: "Feedback System",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted.",
      },
      {
        title: "Live Chat Support",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want access to live chat support so that I can resolve issues quickly.",
      },
      {
        title: "Order Tracking",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to track my orders so that I know when to expect delivery.",
      },
      {
        title: "Secure Payment Gateway",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want a secure payment gateway to ensure my transaction details are safe.",
      },
      {
        title: "Notification Preferences",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to customize my notification preferences to receive relevant alerts.",
      },
      {
        title: "Multi-Currency Support",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want to view prices in different currencies so that I can understand costs in my local currency.",
      },
      {
        title: "Product Recommendation Engine",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user, I want personalized product recommendations to enhance my shopping experience.",
      },
      {
        title: "Accessible User Interface",
        tenantId: 1,
        projectId: 1,
        description:
          "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily.",
      },
      {
        title: "RealTime Form Validation",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form.",
      },
      {
        title: "Mobile Responsive Design",
        tenantId: 1,
        projectId: 2,
        description:
          "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device.",
      },
      {
        title: "Password Strength Indicator",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user creating an account, I want a password strength indicator so that I can create a secure password.",
      },
      {
        title: "Drag and Drop File Upload",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier.",
      },
      {
        title: "Dark Mode Toggle",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain.",
      },
      {
        title: "Language Preference Setting",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to set my language preference to improve my experience with the interface.",
      },
      {
        title: "Two-Factor Authentication Setup",
        tenantId: 1,
        projectId: 2,
        description: "As a user, I want to enable two-factor authentication to secure my account.",
      },
      {
        title: "User Profile Customization",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to customize my profile so that I can display preferred information.",
      },
      {
        title: "Interactive Data Visualizations",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want interactive data visualizations so that I can understand complex data easily.",
      },
      {
        title: "Automated Report Generation",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want reports to be generated automatically so that I can save time.",
      },
      {
        title: "Feedback System",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted.",
      },
      {
        title: "Live Chat Support",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want access to live chat support so that I can resolve issues quickly.",
      },
      {
        title: "Order Tracking",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to track my orders so that I know when to expect delivery.",
      },
      {
        title: "Secure Payment Gateway",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want a secure payment gateway to ensure my transaction details are safe.",
      },
      {
        title: "Notification Preferences",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to customize my notification preferences to receive relevant alerts.",
      },
      {
        title: "Multi-Currency Support",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want to view prices in different currencies so that I can understand costs in my local currency.",
      },
      {
        title: "Product Recommendation Engine",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user, I want personalized product recommendations to enhance my shopping experience.",
      },
      {
        title: "Accessible User Interface",
        tenantId: 1,
        projectId: 2,
        description:
          "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily.",
      },
      {
        title: "RealTime Form Validation",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form.",
      },
      {
        title: "Mobile Responsive Design",
        tenantId: 1,
        projectId: 3,
        description:
          "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device.",
      },
      {
        title: "Password Strength Indicator",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user creating an account, I want a password strength indicator so that I can create a secure password.",
      },
      {
        title: "Drag and Drop File Upload",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier.",
      },
      {
        title: "Dark Mode Toggle",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain.",
      },
      {
        title: "Language Preference Setting",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to set my language preference to improve my experience with the interface.",
      },
      {
        title: "Two-Factor Authentication Setup",
        tenantId: 1,
        projectId: 3,
        description: "As a user, I want to enable two-factor authentication to secure my account.",
      },
      {
        title: "User Profile Customization",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to customize my profile so that I can display preferred information.",
      },
      {
        title: "Interactive Data Visualizations",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want interactive data visualizations so that I can understand complex data easily.",
      },
      {
        title: "Automated Report Generation",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want reports to be generated automatically so that I can save time.",
      },
      {
        title: "Feedback System",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted.",
      },
      {
        title: "Live Chat Support",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want access to live chat support so that I can resolve issues quickly.",
      },
      {
        title: "Order Tracking",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to track my orders so that I know when to expect delivery.",
      },
      {
        title: "Secure Payment Gateway",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want a secure payment gateway to ensure my transaction details are safe.",
      },
      {
        title: "Notification Preferences",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to customize my notification preferences to receive relevant alerts.",
      },
      {
        title: "Multi-Currency Support",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want to view prices in different currencies so that I can understand costs in my local currency.",
      },
      {
        title: "Product Recommendation Engine",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user, I want personalized product recommendations to enhance my shopping experience.",
      },
      {
        title: "Accessible User Interface",
        tenantId: 1,
        projectId: 3,
        description:
          "As a user with disabilities, I want an accessible user interface so that I can navigate the site easily.",
      },
      {
        title: "RealTime Form Validation",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want the form validation to happen in real time so that I can correct any errors as I fill out the form.",
      },
      {
        title: "Mobile Responsive Design",
        tenantId: 1,
        projectId: 4,
        description:
          "As a mobile user, I want the website to adjust to my screen size so that I can browse easily on my device.",
      },
      {
        title: "Password Strength Indicator",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user creating an account, I want a password strength indicator so that I can create a secure password.",
      },
      {
        title: "Drag and Drop File Upload",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to be able to drag and drop files for upload to make the process quicker and easier.",
      },
      {
        title: "Dark Mode Toggle",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want a toggle to switch to dark mode so that I can reduce eye strain.",
      },
      {
        title: "Language Preference Setting",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to set my language preference to improve my experience with the interface.",
      },
      {
        title: "Two-Factor Authentication Setup",
        tenantId: 1,
        projectId: 4,
        description: "As a user, I want to enable two-factor authentication to secure my account.",
      },
      {
        title: "User Profile Customization",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to customize my profile so that I can display preferred information.",
      },
      {
        title: "Interactive Data Visualizations",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want interactive data visualizations so that I can understand complex data easily.",
      },
      {
        title: "Automated Report Generation",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want reports to be generated automatically so that I can save time.",
      },
      {
        title: "Feedback System",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to provide feedback through a simple interface so that my opinions are easily submitted.",
      },
      {
        title: "Live Chat Support",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want access to live chat support so that I can resolve issues quickly.",
      },
      {
        title: "Order Tracking",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to track my orders so that I know when to expect delivery.",
      },
      {
        title: "Secure Payment Gateway",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want a secure payment gateway to ensure my transaction details are safe.",
      },
      {
        title: "Notification Preferences",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to customize my notification preferences to receive relevant alerts.",
      },
      {
        title: "Multi-Currency Support",
        tenantId: 1,
        projectId: 4,
        description:
          "As a user, I want to view prices in different currencies so that I can understand costs in my local currency.",
      },
    ];
    Promise.all(
      userStories.map((b, i) => {
        const model = UserStoryEntity.create(b) as UserStoryEntity;
        model.setSkipSetLastEntryId();
        model.userStoryId = i + 1;
        return model.save().catch(() => null);
      })
    );
  },
  async badgeGenerate(badgeFacade: BadgeFacade) {
    const badges: Partial<BadgeEntity>[] = [
      {
        title: "First Step",
        description: "This badge is earned by submitting your first estimation of a user-story",
        tag: "first_step",
        activityValue: 1,
        activityName: "estimation",
      },
      {
        title: "Totally Accurate",
        description:
          "This badge shows that your estimate was perfectly estimated since the execution took exactly that amount.",
        tag: "totally_accurate",
        activityValue: 1,
        activityName: "correct_estimation",
      },
      {
        title: "Estimation Veteran",
        description: "WOW you have estimated over 100 stories! Keep up the good work.",
        tag: "estimation_veteran",
        activityValue: 100,
        activityName: "estimation",
      },
      {
        title: "Thumbs Up",
        description:
          "Your co-workers liked your estimation, since your estimation was taken for the user story",
        tag: "thumbs_up",
        activityValue: 1,
        activityName: "chosen_estimation",
      },
      {
        title: "A crown-load of work",
        description: "You have estimated over 100 units of work. Maybe get some Vacations?",
        tag: "crown",
        activityValue: 100,
        activityName: "estimation_hours",
      },
      {
        title: "All good things are 3",
        description: "You estimated 3 User Stories, getting the hang of it?",
        tag: "three",
        activityValue: 3,
        activityName: "estimation",
      },
    ];
    Promise.all(
      badges.map((b, i) => badgeFacade.save({ ...b, badgeId: "DUMMY_" + i + 1 }).catch(() => null))
    );
  },
  async achievementGenerate(achievementFacadeFace: UserBadgeAchievementFacade) {
    if (!isDev) return;
    achievementFacadeFace
      .create({
        badgeId: "DUMMY_01",
        tenantId: 1,
        user: <any>{
          userId: "DUMMY-1-1-1",
        },
      })
      .catch(() => null);
  },
  async userActivityGenerate(userActivityFacade: UserActivityFacade) {
    if (!isDev) return;
    userActivityFacade
      .create({
        userId: "DUMMY-1-1-1",
        activities: [
          {
            name: "workload_hours",
            progress: 50,
          },
        ],
      })
      .catch(() => null);
  },
};
