import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import {LoginService} from '../../shared/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  credentials: any = {};
  error: boolean = false;

  constructor(private loginService: LoginService,
                      private authService: AuthService,
                      private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.loginService.login(this.credentials).subscribe(response => {
      if(!response.error){
        this.authService.save(response.token);
        this.router.navigate(['/users']);
      }else this.error = true;
    });
  }
}
