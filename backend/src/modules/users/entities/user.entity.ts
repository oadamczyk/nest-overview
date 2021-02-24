import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false, unique: true })
  @IsEmail()
  @IsNotEmpty()
  @Index({ unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  @IsNotEmpty()
  @Exclude()
  password: string;

  @CreateDateColumn({ nullable: false })
  createDate: Date;

  @UpdateDateColumn({ nullable: false })
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
