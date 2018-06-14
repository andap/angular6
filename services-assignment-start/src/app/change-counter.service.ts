export class ChangeCounterService {
  counter = 0;

  incrementCounter() {
    this.counter ++;
    console.log('User status changed: ', this.counter);
  }

}
