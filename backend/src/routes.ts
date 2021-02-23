import { Routes } from 'nest-router';
import { UsersModule } from './modules/users/users.module';

export const routes: Routes = [
  {
    path: '/api/consumer/v1',
    module: UsersModule,
  },
];
