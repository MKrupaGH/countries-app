export class User {
  constructor(
    private email: string,
    private token: string,
    private localId: string,
    private expirationDate: Date,
    private favorite: string[]
  ) {}

  get expireDate() {
    return this.expirationDate;
  }

  get userToken() {
    return this.token;
  }

  get favoriteCodes() {
    return this.favorite;
  }
}
