/**
 * 
 */

export class User {
  
  email: string;
  accountNum: number;
  name: string;
  surname: string;
  phoneNum: string;
  role: string;
  password: string;
  recoveryResponse: string;
  region: string;
  active: boolean;
  enabled: boolean;
  
  constructor(email: string, accountNum: number, name: string, surname: string, 
             phoneNum: string, role: string, password: string, recoveryResponse: string,
           region: string, active: boolean, enabled: boolean) {
  
         
    this.email = email;
    this.accountNum = accountNum;
    this.name = name;
    this.surname = surname;
    this.phoneNum = phoneNum;
    this.role = role;
    this.password = password;
    this.recoveryResponse = recoveryResponse;
    this.region = region;
    this.active = active;
    this.enabled = enabled;
    
    
  
  }
}