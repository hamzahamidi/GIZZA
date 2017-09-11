import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService{

  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private password: string;
  private connected: boolean;
  private role: string;

  constructor(){
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';
    this.connected = false;
    this.role = '';
  }

  public getFirstName(){
    return this.firstName;
  }

  public getLastName(){
    return this.lastName;
  }

  public getEmail(){
    return this.email;
  }

  public getPhoneNumber(){
    return this.phoneNumber;
  }

  public getPassword(){
    return this.password;
  }

  public getConnected(){
    return this.connected;
  }

  public getRole(){
    return this.role;
  }

  public setFirstName(firstName: string){
    this.firstName = firstName;
  }

  public setLastName(lastName: string){
    this.lastName = lastName;
  }

  public setEmail(email: string){
    this.email = email;
  }

  public setPhoneNumber(phoneNumber: string){
    this.phoneNumber = phoneNumber;
  }

  public setPassword(password: string){
    this.password = password;
  }

  public setConnected(connected: boolean){
    this.connected = connected;
  }

  public setRole(role: string){
    this.role = role;
  }
}
