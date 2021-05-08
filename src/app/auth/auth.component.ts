import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  status: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.status = this.authService.isAuth;
  }

  onSignIn(): void {
    this.authService.signIn().then(
      () => {
        console.log('Connecting with success !');
        this.router.navigate(['devices']);
        this.status = this.authService.isAuth;
      }
    );
  }
  onSignOut(): void {
    this.authService.signOut();
    this.status = this.authService.isAuth;
    console.log('Disconnected');
  }
}
