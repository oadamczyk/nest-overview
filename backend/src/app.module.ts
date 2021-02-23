import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { routes } from './routes';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    DatabaseModule,
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
