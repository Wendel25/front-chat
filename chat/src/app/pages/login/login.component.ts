import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: import("@angular/forms").FormGroupDirective | import("@angular/forms").NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(
    private router: Router,
  ){}

  email: string = '';
  password: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'O e-mail é obrigatório';
    }
    return this.emailFormControl.hasError('email') ? 'E-mail inválido' : '';
  }

  login(){
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const loginData = {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value,
      };
    }

    this.router.navigate(['Home']);
  }

  creatRegister(){
    this.router.navigate(['Registrar'])
  }

  newPassword(){
    this.router.navigate(['Nova-Senha'])
  }
}
