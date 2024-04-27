import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity} from 'typeorm';

@Entity('project')
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type:'number'})
  projectId: number;

  @Column()
  title: string;
}
