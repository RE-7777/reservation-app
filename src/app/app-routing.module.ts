import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { PracticeModule } from './practice/practice.module';


const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch:'full'},
  // {path:'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    PracticeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
