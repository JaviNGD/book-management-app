import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }


  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({token})
                    .subscribe({
                      next: () => {
                        this.message = 'Your account has been successfully activated.';
                        this.submitted = true;
                        this.isOkay = true;
                      },
                      error: () => {
                        this.message = 'The token has expired or is invalid.';
                        this.submitted = true;
                        this.isOkay = false;
                      }
                    });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
