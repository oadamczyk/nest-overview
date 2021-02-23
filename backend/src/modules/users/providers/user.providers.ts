import { User } from '../entities/user.entity';
import { USERS_REPOSITORY } from '../consts';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: User,
  },
];
