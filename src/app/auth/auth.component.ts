import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Formbuilder, FormControl } from '@angular/core'
import { FormGroup } from '@angular/forms';
=======
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
>>>>>>> 53df8b7edcb4efc4e75f564b86af93ff62c723b4

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth: FormGroup;

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
    this.auth = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

<<<<<<< HEAD
  // onAuth() : void {
  //   this.
  // }
=======
  login(event) {
    event.preventDefault();
    let email = event.target.querySelector("#email").value;
    let pass = event.target.querySelector("#password").value;
    fetch('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: pass
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error === false && data.loggedInUser.role === "admin") {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.loggedInUser.role);
      } else {
        alert('Admin account not found');
      }
    })
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }
>>>>>>> 53df8b7edcb4efc4e75f564b86af93ff62c723b4

}
