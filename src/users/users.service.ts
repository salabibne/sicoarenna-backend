import { Injectable } from '@nestjs/common';

export interface User {
  id?: number;
  name: string;
  age: number;
}
@Injectable()
export class UsersService {
  private users: User[] = [];
  // create a new user
  create(user: User) {
    this.users.push({ ...user, id: Date.now() });
  }

  // Get all the users
  findAll(): User[] {
    return this.users;
  }
}
