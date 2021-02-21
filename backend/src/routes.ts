import { Routes } from 'nest-router';
import { UsersModule } from './consumer/v1/users/users.module';

export const routes: Routes = [
  {
    path: '/api/consumer/v1',
    module: UsersModule,
  },
];
