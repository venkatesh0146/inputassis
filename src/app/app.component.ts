import { Component,ViewChildren } from '@angular/core';
import { MyInputComponentComponent } from './my-input-component/my-input-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 noOfInputFields = 5;
 fieldsConfig = Array.from(Array(this.noOfInputFields).keys())
 result:any[] = []
 flag : boolean = false;
 @ViewChildren(MyInputComponentComponent) myinput : any 

 onSubmit(){
  this.result = []
  this.myinput.forEach((ele:any) => {
    this.flag = true;
    
     this.result.push(...ele.myVal.split(',').map((a:any) => Number(a)))
  
    
    })
  this.result.sort((a,b) => a-b)
 }
 }


