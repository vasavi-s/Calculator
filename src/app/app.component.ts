import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // <router-outlet></router-outlet>
  title = 'Simple Calculator';
  num3: any;
  num2: any;
  num1: any;
  add(): void{
    this.num3= this.num1+this.num2;
  }
  sub(): void{
    this.num3= this.num1-this.num2;
  }
  mul(): void{
    this.num3= this.num1*this.num2;
  }
  div(): void{
    this.num3= this.num1/this.num2;
  }
  
}

