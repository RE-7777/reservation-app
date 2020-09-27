import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  errors:any = [];
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(regiserForm) {
    this.authService.register(regiserForm.value).subscribe(
      (result) => {
        console.log('Success!');
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        
        console.error(err);
        this.errors = err.error.errors;
      }
    )
    
  }

}
