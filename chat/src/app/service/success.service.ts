import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  registerSucess(){
    this.snackBar.open('Cadastro realizado com sucesso', 'Fechar', {
      duration: 3000
    })
  }
}
