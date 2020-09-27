import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
    {
        path:'practice',component:PracticeComponent,
        children:[
            {path: '', component: PracticeComponent},
            {path:':rowName', component: PracticeComponent}
        ]
    }

    
  ];

@NgModule({
  declarations: [
    PracticeComponent,
  ],
  imports: [  
    RouterModule.forChild(routes),
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule,   
    BrowserModule,
    FontAwesomeModule,
    MatIconModule
    
    
  ],
  providers: [
    
  ],
  bootstrap: []
})
export class PracticeModule { }
