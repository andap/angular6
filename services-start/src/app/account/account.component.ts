import { Component, EventEmitter, Input, Output } from '@angular/core';
//import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
 // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(//private loggingStervice: LoggingService,
              private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateAccountStatus(this.id, status);
  //  this.loggingStervice.logStatusChange(status);
  }
}