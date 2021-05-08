import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Chris',
      email: 'jaes@gmail.com',
      drinkPreference: 'coke',
      hobbies: [
        'coding', 'cawa'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
