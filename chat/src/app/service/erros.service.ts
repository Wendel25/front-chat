import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrosService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  passwordInvalid(){
    this.snackBar.open('As senhas não coincidem', 'Fechar', {
      duration: 2000
    })
  }

  registerInvalid(){
    this.snackBar.open('Erro ao se cadastrar', 'Fechar', {
      duration: 3000
    })
  }
}
