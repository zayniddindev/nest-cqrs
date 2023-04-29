import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from 'src/user/application/events/impl/user-created.event';

export class User extends AggregateRoot {
  constructor(private name: string) {
    super();
  }

  create(payload: { name: string }) {
    this.apply(new UserCreatedEvent(payload.name));
  }
}
