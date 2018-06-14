import {Component, OnInit} from '@angular/core';
import {UsersServices} from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[] = [];

  constructor(private usersService: UsersServices) {}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

}
