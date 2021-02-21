import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { routes } from './routes';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './consumer/v1/users/users.module';
import { HealthController } from './health/health.controller';
import { User } from './consumer/v1/users/entities/user.entity';

@Module({
  controllers: [HealthController],
  imports: [
    RouterModule.forRoutes(routes),
    TerminusModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User],
      synchronize: true,
      migrations: ['src/migration/**/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
