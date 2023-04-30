import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserRepository } from 'src/user/core/repositories/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    const persistedUser = await this.userRepo.create(command);
    const user = this.publisher.mergeObjectContext(persistedUser);
    user.create({ ...command });
    user.commit();
    return user;
  }
}
