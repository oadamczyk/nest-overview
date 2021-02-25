import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersCreator } from "./users.creator";

@Injectable()
export class UsersWhatever {
  // constructor(@Inject(forwardRef(() => UsersCreator)) private readonly usersCreator: UsersCreator) {}
  constructor(@Inject(UsersCreator) private readonly usersCreator: UsersCreator) {}

  async call() {
    console.log(this.usersCreator, "I AM USELESS");
  }
}
