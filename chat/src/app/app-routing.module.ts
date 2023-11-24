import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { GroupComponent } from './components/group/group.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Registrar', component: RegisterComponent },
  { path: 'Nova-Senha', component: NewPasswordComponent },
  {
    path: 'Home', component: HomeComponent,
    children: [
      { path: 'Conversas', component: ConversationsComponent },
      { path: 'Grupos', component: GroupComponent },
      { path: 'Contatos', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
