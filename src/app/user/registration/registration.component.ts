import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, DoCheck {

  formValid = false;

  model = {
    firstName : '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  oldModel = {
    firstName : '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  errMessage = {
    firstNameErr : '',
    lastNameErr: '',
    emailErr: '',
    phoneNumberErr: '',
    passwordErr: '',
    confirmPasswordErr: '',
  };

  classModel = {
    firstNameClass: {valid: false, invalid: true},
    lastNameClass: {valid: false, invalid: true},
    emailClass: {valid: false, invalid: true},
    phoneNumberClass: {valid: false, invalid: true},
    passwordClass: {valid: false, invalid: true},
    confirmPasswordClass: {valid: false, invalid: true}
  };

  constructor() {}

  ngOnInit() {
    this.model.firstName = '';
    this.oldModel.firstName = '';
    this.model.lastName = '';
    this.oldModel.lastName = '';
    this.model.email = '';
    this.oldModel.email = '';
    this.model.phoneNumber = '';
    this.oldModel.phoneNumber = '';
    this.model.password = '';
    this.oldModel.password = '';
  }

  ngDoCheck(): void {

    if (this.model.firstName !== this.oldModel.firstName) {

      if(this.model.firstName.trim().length > 0){
        this.classModel.firstNameClass = {valid : true, invalid: false};
        this.errMessage.firstNameErr = ''
      }else{
        this.classModel.firstNameClass = {valid : false, invalid: true};
        this.errMessage.firstNameErr = 'Veuillez entrer votre prénom';
      }

      this.oldModel.firstName = this.model.firstName;
    }

    if (this.model.lastName !== this.oldModel.lastName) {

      if(this.model.lastName.trim().length > 0){
        this.classModel.lastNameClass = {valid : true, invalid: false};
        this.errMessage.lastNameErr = ''
      }else{
        this.classModel.lastNameClass = {valid : false, invalid: true};
        this.errMessage.lastNameErr = 'Veuillez entrer votre nom';
      }

      this.oldModel.lastName = this.model.lastName;
    }

    if (this.model.email !== this.oldModel.email) {

      if(this.validateEmail(this.model.email)){
        this.classModel.emailClass = {valid : true, invalid: false};
        this.errMessage.emailErr = '';
      }else{
        this.classModel.emailClass = {valid : false, invalid: true};
      }

      this.oldModel.email = this.model.email;
    }

    if (this.model.phoneNumber !== this.oldModel.phoneNumber) {

      if(this.validatePhoneNumber(this.model.phoneNumber)){
        this.classModel.phoneNumberClass = {valid : true, invalid: false};
        this.errMessage.phoneNumberErr = '';
      }else{
        this.classModel.phoneNumberClass = {valid : false, invalid: true};
      }

      this.oldModel.phoneNumber = this.model.phoneNumber;
    }

    if (this.model.password !== this.oldModel.password) {

      if(this.validatePassWord(this.model.password)){
        this.classModel.passwordClass = {valid : true, invalid: false};
        this.errMessage.passwordErr = '';
      }else{
        this.classModel.passwordClass = {valid : false, invalid: true};
      }

      if(this.validateConfirmPassWord(this.model.password, this.model.confirmPassword)){
        this.classModel.confirmPasswordClass = {valid : true, invalid: false};
        this.errMessage.confirmPasswordErr = '';
      }else{
        this.classModel.confirmPasswordClass = {valid : false, invalid: true};
        this.errMessage.confirmPasswordErr = "La confirmation doit être identique au mot de passe."
      }

      this.oldModel.password = this.model.password;
    }

    if (this.model.confirmPassword !== this.oldModel.confirmPassword) {

      if(this.validateConfirmPassWord(this.model.password, this.model.confirmPassword)){
        this.classModel.confirmPasswordClass = {valid : true, invalid: false};
        this.errMessage.confirmPasswordErr = '';
      }else{
        this.classModel.confirmPasswordClass = {valid : false, invalid: true};
      }

      this.oldModel.password = this.model.password;
    }

    this.formValid = !this.classModel.firstNameClass.valid ||
                      !this.classModel.lastNameClass.valid ||
                      !this.classModel.emailClass.valid ||
                      !this.classModel.passwordClass.valid ||
                      !this.classModel.confirmPasswordClass.valid;

  };

  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  emailOnBlur(){
    if(this.validateEmail(this.model.email)){
      this.errMessage.emailErr = '';
    }else{
      this.errMessage.emailErr = 'Merci de renseigner un email valide';
    }
  }

  validatePhoneNumber(phoneNumber) {
    let re = /^0[1-9]([-. ]?[0-9]{2}){4}$/
    return re.test(phoneNumber);
  }

  phoneNumberOnBlur(){
    if(this.validatePhoneNumber(this.model.phoneNumber)){
      this.errMessage.phoneNumberErr = '';
    }else{
      this.errMessage.phoneNumberErr = 'Merci de renseigner un téléphone valide';
    }
  }

  validatePassWord(passWord) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/
    return re.test(passWord);
  }

  validateConfirmPassWord(password, passwordConfirm){
    if((password.trim().length > 0) && (passwordConfirm.trim().length > 0) && (password == passwordConfirm) ){
      return true;
    }else{
      return false;
    }
  }

  passWordOnBlur(){
    if(this.validatePassWord(this.model.password)){
      this.errMessage.passwordErr = '';
    }else{
      this.errMessage.passwordErr = "Veuillez entrer un mot de passe valide";
    }
  }

  confirmPasswordOnBlur(){
    if(this.validateConfirmPassWord(this.model.password, this.model.confirmPassword)){
      this.errMessage.confirmPasswordErr = '';
    }else{
      this.errMessage.confirmPasswordErr = "La confirmation doit être identique au mot de passe."
    }
  }

  confirmPasswordOnFocus(){
    this.errMessage.confirmPasswordErr = '';
  }

  onSubmit() {
  }
}
