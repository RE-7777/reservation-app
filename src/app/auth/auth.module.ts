import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

    
  ];

@NgModule({
  declarations: [
    
    LoginComponent,
    RegisterComponent,
  ],
  imports: [  
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: []
})
export class AuthModule { }
