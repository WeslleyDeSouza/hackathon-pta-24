import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ApiModelProjectModule, ProjectFacade } from '@hackathon-pta/api/model/project';
import { DummyDataGenerator } from '../../common/_dummy-data';

@Module({
  imports: [ApiModelProjectModule],
  controllers: [ProjectController],

})
export class ProjectModule {
  constructor(projectFacade:ProjectFacade) {
    DummyDataGenerator.projectGenerate(projectFacade)
  }
}
