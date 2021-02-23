import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UnprocessableException } from "../../../exceptions/unprocessable.exception";

@Injectable()
export class UsersCreator {
  constructor(
    @InjectRepository(User)
    protected repository: Repository<User>,
  ) {
  }

  async call(dto: CreateUserDto): Promise<UserDto> {
    const resource = this.buildResource(dto);
    await this.validateResource(resource);
    await this.repository.save(resource);
    return this.buildResult(resource);
  }

  protected buildResource(dto: CreateUserDto) {
    return new User(dto);
  }

  protected buildResult(resource: User) {
    return plainToClass(UserDto, resource);
  }

  protected async validateResource(resource: User) {
    const errors = await validate(resource);
    if (errors.length > 0) {
      throw new UnprocessableException(errors);
    }
  }
}
