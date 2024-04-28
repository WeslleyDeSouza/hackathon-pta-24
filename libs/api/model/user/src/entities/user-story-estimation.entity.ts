import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
  Unique,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { TenantBaseEntity } from "@hackathon-pta/api/model/_base";
import { UserStoryEntity } from "./user-story.entity";

@Entity("user_story_estimation")
@Unique(["userStoryId", "tenantId", "estimationId"])
export class UserStoryEstimationEntity extends TenantBaseEntity {
  override self: typeof UserStoryEstimationEntity = UserStoryEstimationEntity;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int",
    unsigned: true,
  })
  estimationId: number | undefined;

  @Column()
  projectId: number;

  @Column({ type: "int" })
  userStoryId: number;

  @Column({ type: "double", nullable: false })
  estimateValue: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserStoryEntity, user => user.estimations)
  @JoinColumn([
    { name: "userStoryId", referencedColumnName: "userStoryId" },
    { name: "tenantId", referencedColumnName: "tenantId" },
  ])
  userStory: UserStoryEntity;

  @ManyToOne(() => UserEntity, user => user.estimations)
  @JoinColumn({ name: "userId" })
  user: UserEntity;

  @BeforeInsert()
  async beforeInsert() {
    console.log("TODO multiple fields");
    await this.setLastEntryId("estimationId");
  }
}
