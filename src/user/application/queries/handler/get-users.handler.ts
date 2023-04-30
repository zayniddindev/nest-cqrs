import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../impl/get-users.query';
import { UserRepository } from 'src/user/core/repositories/user.repository';

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly userRepo: UserRepository) {}

  execute(query: GetUsersQuery): Promise<any> {
    return this.userRepo.find();
  }
}
