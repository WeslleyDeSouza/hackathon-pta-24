import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ApiModelProjectModule } from '@hackathon-pta/api/model/project';

@Module({
  imports: [ApiModelProjectModule],
  controllers: [ProjectController],

})
export class ProjectModule {}
