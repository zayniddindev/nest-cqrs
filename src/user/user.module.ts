import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { UserController } from './user.controller';
import { UserRepository } from './core/repositories/user.repository';
import { UserCreatedHandler } from './application/events/handlers/user-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [UserRepository, CreateUserHandler, UserCreatedHandler],
})
export class UserModule {}
