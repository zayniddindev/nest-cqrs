import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { UserController } from './infra/controllers/user.controller';
import { UserRepository } from './core/repositories/user.repository';
import { UserCreatedHandler } from './application/events/handlers/user-created.handler';
import { UserSaga } from './infra/sagas/user.saga';
import { GetUsersQueryHandler } from './application/queries/handler/get-users.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    UserRepository,
    CreateUserHandler,
    UserCreatedHandler,
    GetUsersQueryHandler,
    UserSaga,
  ],
})
export class UserModule {}
