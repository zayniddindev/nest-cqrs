import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  async create(payload: { name: string }): Promise<User> {
    return new User(payload.name);
  }
}
