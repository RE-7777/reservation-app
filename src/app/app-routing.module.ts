import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { PracticeModule } from './practice/practice.module';
import { AuthModule } from'./auth/auth.module';

const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch:'full'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    PracticeModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
