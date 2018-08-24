export interface Roles { 
    User?: boolean;
    Admin?: boolean;
 }
  
export interface User {
    uid: string;
    firstName:string;
    lastName:string;
    email: string;
    role: Roles;
}