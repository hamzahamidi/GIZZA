export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public pseudo: string,
    public address: string,
    public phoneNumber: string,
    public email: string = '',
    public password: string = '',
    public connected: boolean = false,
    public role?: string,
  ) {  }

}
