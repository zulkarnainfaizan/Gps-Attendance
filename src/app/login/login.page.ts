import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  data={
    detailsId:546
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/home']);
  }
  nav(){
    this.router.navigateByUrl(`/attendance/${this.data.detailsId}`);
  }

}
