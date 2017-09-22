import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reinitialise',
  templateUrl: './reinitialise.component.html',
  styleUrls: ['./reinitialise.component.css']
})
export class ReinitialiseComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();

  }
  userForm: FormGroup;
  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({

      email : ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
      ])],

    });
  }
}
