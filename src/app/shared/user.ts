export class User {

  constructor(
    public email: string = '',
    public password: string = '',
    public connected: boolean = false,
    public firstName?: string,
    public lastName?: string,
    public phoneNumber?: string,
    public role?: string,
  ) {  }

}
