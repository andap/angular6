import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscriptionType = 'basic';

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.email);
    console.log(form.value.password);
    console.log(form.value.subscriptionType);
  }
}
