import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['F', 'M'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

/*  onSubmit(f: NgForm) {
    console.log(f);
  }*/

  onSubmit() {
    console.log(this.subscriptionForm);
  }
}
