import { Component, OnInit } from '@angular/core';
import { Formbuilder, FormGroup, FormControl } from '@angular/core'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth: FormGroup;
  admin: []

  constructor(private fb: FormGroup) { }

  ngOnInit() {
    this.auth = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onAuth() : void {
    this.
  }

}
