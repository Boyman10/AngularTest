export class AuthService {
  isAuth = false;

  signIn(): Promise<boolean> {
    return new Promise(
      (resolve) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 2000);
    });
  }

  signOut(): void {
    this.isAuth = false;
  }
}
