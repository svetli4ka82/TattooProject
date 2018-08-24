export class UserDataModel {
    constructor(
    public id: string,
     public email: string,
     public firstName: string,
     public lastName: string,
     public role: string,
     private uid: string,
    ) {}
  }