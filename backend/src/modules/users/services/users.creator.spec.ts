import { Test, TestingModule } from '@nestjs/testing';
import { UsersCreator } from './users.creator';
import { usersProviders } from '../providers/user.providers';
import { CreateUserDto } from '../dto/create-user.dto';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../../../database.module';
import { plainToClass } from 'class-transformer';

describe('UsersCreator', () => {
  let service: UsersCreator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DatabaseModule],
      providers: [UsersCreator, ...usersProviders],
    }).compile();

    service = module.get<UsersCreator>(UsersCreator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    console.log(
      service.call(
        plainToClass(CreateUserDto, {
          email: 'test@example.com',
          plainPassword: '12345A',
        }),
      ),
    );
  });
});
