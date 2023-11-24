import { Component } from '@angular/core';
@Component({
  selector: 'app-options-user',
  templateUrl: './options-user.component.html',
  styleUrls: ['./options-user.component.scss']
})

export class OptionsUserComponent {

  options = [
    { icon: '3p', title: 'Conversas', routerLink: 'Conversas' },
    { icon: 'forum', title: 'Grupos', routerLink: 'Grupos' },
    { icon: 'contacts', title: 'Contatos', routerLink: 'Contatos' }
  ];
}
