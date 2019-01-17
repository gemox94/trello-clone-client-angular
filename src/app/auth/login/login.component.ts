import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.email, this.password);
    this.authService.login({email: this.email, password: this.password}).subscribe( (response: any) => {
      console.log(response);
      localStorage.setItem('token', response.token);
    }, (err: any) => {
      console.error(err);
    });
  }

}
