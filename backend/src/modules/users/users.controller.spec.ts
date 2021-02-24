import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersCreator } from './services/users.creator';
import { usersProviders } from './providers/user.providers';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersCreator, ...usersProviders],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
