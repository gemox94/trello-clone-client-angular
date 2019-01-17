import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  get form_email() { return this.loginForm.get('email'); }
  get form_password() { return this.loginForm.get('password'); }

  submitForm() {
    this.authService.login(this.loginForm.value).subscribe(this.submitFormSuccess, this.submitFormError);
  }

  private submitFormSuccess(data: any) {
    console.log(data);
    localStorage.setItem('token', data.token);
  }

  private submitFormError(err: any) {
    console.error(err);
  }

}
