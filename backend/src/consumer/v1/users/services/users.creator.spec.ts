import { Test, TestingModule } from '@nestjs/testing';
import { UsersCreator } from './users.creator';

describe('UsersCreator', () => {
  let service: UsersCreator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersCreator],
    }).compile();

    service = module.get<UsersCreator>(UsersCreator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
