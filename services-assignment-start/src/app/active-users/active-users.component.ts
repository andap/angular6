import {Component, OnInit} from '@angular/core';
import {UsersServices} from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = [];

  constructor(private usersService: UsersServices) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
