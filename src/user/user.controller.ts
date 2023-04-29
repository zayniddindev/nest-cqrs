import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './application/commands/impl/create-user.command';

@Controller('user')
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() dto: { name: string }) {
    return this.commandBus.execute(new CreateUserCommand(dto.name));
  }
}
