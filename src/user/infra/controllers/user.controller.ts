import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../application/commands/impl/create-user.command';
import { GetUsersQuery } from 'src/user/application/queries/impl/get-users.query';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() dto: { name: string }) {
    return this.commandBus.execute(new CreateUserCommand(dto.name));
  }

  @Get()
  createWithGet() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
