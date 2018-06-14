
import {Injectable} from '@angular/core';
import {ChangeCounterService} from './change-counter.service';

@Injectable()
export class UsersServices {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private changeCounterService: ChangeCounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.changeCounterService.incrementCounter();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.changeCounterService.incrementCounter();
  }
}
