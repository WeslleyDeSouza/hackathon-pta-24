import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity('badge')
export class BadgeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  badgeId: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
