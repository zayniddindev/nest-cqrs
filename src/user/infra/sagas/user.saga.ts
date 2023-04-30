import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { UserCreatedEvent } from 'src/user/application/events/impl/user-created.event';

@Injectable()
export class UserSaga {
  @Saga()
  userCreated = (evets$: Observable<any>): Observable<ICommand> => {
    return evets$.pipe(
      ofType(UserCreatedEvent),
      map((event) => {
        console.log('Saga');
        return new UserCreatedEvent(event.name);
      }),
    );
  };
}
