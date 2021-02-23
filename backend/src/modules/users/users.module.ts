import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersCreator } from './services/users.creator';
import { usersProviders } from './providers/user.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersCreator, ...usersProviders],
})
export class UsersModule {}
