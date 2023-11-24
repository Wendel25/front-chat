import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrosService } from 'src/app/service/erros.service';
import { ApiService } from 'src/app/service/apis/api.service';
import { SuccessService } from 'src/app/service/success.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  formRegisterUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private errosService: ErrosService,
    private successService: SuccessService,
    private apiService: ApiService,
  ){
    this.formRegisterUser = this.formBuilder.group({
      nameControl: new FormControl(''),
      lastNameControl: new FormControl(''),
      emailFormControl: new FormControl('', [Validators.email]),
      passwordFormControl: new FormControl(''),
      confirmPasswordControl: new FormControl('')
    });
  }

  ngOnInit(): void {
      this.formRegisterUser
  }

  checkPasswords(): void {
    const passwordControl = this.formRegisterUser.get('passwordFormControl');
    const confirmPasswordControl = this.formRegisterUser.get('confirmPasswordControl');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ mismatch: true });

        this.errosService.passwordInvalid();
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  submitRegistration() {
    if (this.formRegisterUser.valid) {
      const newUser = {
        name: this.formRegisterUser.value.nameControl,
        lastName: this.formRegisterUser.value.lastNameControl,
        email: this.formRegisterUser.value.emailFormControl,
        password: this.formRegisterUser.value.passwordFormControl,
      };

      this.apiService.registerUser(newUser).subscribe(
        (data) => {
          this.successService.registerSucess();
          this.formRegisterUser.reset();

          this.router.navigate([''])
        },
        (error) => {
          console.error('Erro ao registrar usuário:', error);
          this.errosService.registerInvalid();
        }
      );
    }
  }

  back(){
    this.router.navigate([''])
  }

}
