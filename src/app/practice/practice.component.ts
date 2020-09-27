import { Component, OnInit, ViewChild } from '@angular/core';
//ag-grid
import { HttpClient } from '@angular/common/http';
//stepper
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import{faDownload} from '@fortawesome/free-solid-svg-icons'


import { Router, ActivatedRoute } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatHorizontalStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-practice-list',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},
  }]
})
export class PracticeComponent implements OnInit {
  //ag-grid
  public error = true;
  rowData:any;
  private _jsonURL='../assets/file/practiceData.json';
  private jsonMakeData:any;
  private makeName:any;
  private jsonModelData:any;
  private modelName:any;
  private jsonModelName:any;
  private state:any;
  private dammyJsonURL='../assets/file/dammy.json';
  completed:boolean;


  //stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  faDownload=faDownload;
  constructor(
    private http: HttpClient,
    
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    
    //this.getJsonData()の返り値をsubscribe関数の引数dataとする
    this.route.queryParams.subscribe(params => {
      this.state = params['make'];
      console.log(this.state);

      if(this.state ==='Porsche'){
        this.rowData = this.http.get(this.dammyJsonURL);
        
      }
      else{
        this.rowData = this.http.get(this._jsonURL);
        
      }
    });
    
  }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];



onClick(params:any){
  this.jsonMakeData=params["data"]["make"];
  this.makeName=this.jsonMakeData;
  console.log(this.jsonMakeData);
  this.jsonModelData=params["data"]["model"];
  this.modelName=this.jsonModelData;
  console.log(this.jsonMakeData);
  this.router.navigate(['/practice'],{queryParams:{make:this.makeName,model:this.modelName}})
}



switch():boolean{
  if(this.state === 'Porsche'){
    this.completed=true;
    return this.completed;
  }
  else{
    this.completed = false;
    return this.completed;
  }

}

getRowData(){
  
}



  

    

}