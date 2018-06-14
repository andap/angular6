export class AuthService {
  isLoggedin = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isLoggedin);
        }, 800);
      }
    );

    return promise;
  }

  login() {
    this.isLoggedin = true;
  }

  logout() {
    this.isLoggedin = false;
  }
}
