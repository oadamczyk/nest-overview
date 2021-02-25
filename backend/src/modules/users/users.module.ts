import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersCreator } from './services/users.creator';
import { usersProviders } from './providers/user.providers';
import { UsersWhatever } from "./services/users.whatever";

@Module({
  controllers: [UsersController],
  providers: [UsersCreator, UsersWhatever, ...usersProviders],
})
export class UsersModule {}
