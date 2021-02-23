import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersCreator } from './services/users.creator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersCreator],
})
export class UsersModule {}
