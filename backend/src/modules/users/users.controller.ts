import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Header,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UsersCreator } from './services/users.creator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { RequestSchemaValidationPipe } from '../../pipes/request-schema-validation.pipe';
import { JsonApiDeserializingPipe } from '../../pipes/json-api-deserializing.pipe';
import { JsonApiSerializationInterceptor } from "../../interceptors/json-api-serialization.interceptor";
import { UserSerializer } from "./serializers/user-serializer";

@Controller('users')
export class UsersController {
  constructor(private readonly usersCreator: UsersCreator) {}

  @Post()
  @Header('Content-Type', 'application/vnd.api+json')
  @UseInterceptors(new JsonApiSerializationInterceptor(new UserSerializer()))
  @UsePipes(
    new RequestSchemaValidationPipe("users", "create_users"),
    new JsonApiDeserializingPipe({}),
  )
  create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersCreator.call(createUserDto);
  }

  @Patch(':id')
  @Header('Content-Type', 'application/vnd.api+json')
  @UseInterceptors(new JsonApiSerializationInterceptor(new UserSerializer()))
  @UsePipes(
    // new RequestSchemaValidationPipe("users", "update_user"),
    new JsonApiDeserializingPipe({}),
  )
  update(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersCreator.call(createUserDto);
  }
}
