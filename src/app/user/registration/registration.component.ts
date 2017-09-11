import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/user';

import * as $ from 'jquery';

@Component({
  selector: 'app-reactive-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ["", Validators.required ],
      lastName : ["", Validators.compose([Validators.required, Validators.minLength(3)]) ],
      address : ["", Validators.required ],
      phoneNumber : ['', Validators.compose([
        Validators.required,
        Validators.pattern("^0[1-9]([-. ]?[0-9]{2}){4}$")
      ])],
      email : ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
      ])],
      password : ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$")
      ])],
      confirm_password : ['', Validators.compose([Validators.required])]
    }, {validator: this.matchingPassword('password', 'confirm_password')});
  }

  matchingPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirm_password = group.controls[confirmPasswordKey];

      if (password.value !== confirm_password.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  ngOnInit() {
    $('span.passwordFormatInfo').hover(function(){

        $('div.passwordFormat').position({
          top: $(this).position().top,
          left: $(this).position().left
        });
        $('div.passwordFormat').css('display', 'block');

    }, function(){
      $('div.passwordFormat').css('display', 'none');
    });
//    console.log($('span.passwordFormatInfo'));
  }

  ngSubmit(){
    let user = new User(
      this.userForm.controls['firstName'].value,
      this.userForm.controls['lastName'].value,
      this.userForm.controls['address'].value,
      this.userForm.controls['phoneNumber'].value,
      this.userForm.controls['email'].value,
      this.userForm.controls['password'].value
    );

    console.log(user);

  }
}
