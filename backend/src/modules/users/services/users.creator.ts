import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserDto } from '../dto/user.dto';
import { classToPlain, plainToClass } from 'class-transformer';
import { USERS_REPOSITORY } from '../consts';

@Injectable()
export class UsersCreator {
  constructor(@Inject(USERS_REPOSITORY) private repository: typeof User) {}

  async call(dto: CreateUserDto): Promise<UserDto> {
    const resource = this.buildResource(dto);
    await this.repository.create(classToPlain(resource).dataValues);
    return this.buildResult(resource);
  }

  protected buildResource(dto: CreateUserDto) {
    return plainToClass(User, dto);
  }

  protected buildResult(resource: User) {
    return plainToClass(UserDto, resource);
  }
}
