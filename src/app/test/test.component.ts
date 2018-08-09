import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p>welcome {{name}}
  <h2 class="text-success">code evolution</h2>
<h2 [class]="successClass">code evolution</h2>
<h2 class="text-special" [class]="successClass">code evolution</h2>
<h2 [class.text-danger]="hasError">code evolution</h2>
<h2 [ngClass]="messageClasses">code evolution</h2>

  `,
  styles: [`
    p{
      color:blue;
    }
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italics;
    }
   `]
})
export class TestComponent implements OnInit {
public name="bashka";
public successClass="text-success"
public hasError=false;
public isSpecial=true;
public messageClasses={
  "text-success": !this.hasError,
  "text-danger":  this.hasError,
  "text-special": this.isSpecial,

}
welcomeUser(){
  return "hello and welcome to your first angular app "+this.name
}
  constructor() { }

  ngOnInit() {
  }


}
