import { Component, OnInit } from '@angular/core';
//ag-grid
import { HttpClient } from '@angular/common/http';
//stepper
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import{faDownload} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-practice-list',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  //ag-grid
  rowData:any;
  private _jsonURL='../assets/file/practiceData.json';
  //stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  faDownload=faDownload;
  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder
    
    ) { }

  ngOnInit(): void {
    this.rowData = this.http.get(this._jsonURL);
    
  }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

  

    

}