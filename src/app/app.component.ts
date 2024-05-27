import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EXAMINATION RESULTS';
  title2 = 'enter the student ID';
  title3 = 'INPUT DECORATOR EXAMPLE';

  word: String|undefined
  
  flag=false;
   arr=[1,2,3,4]
   style="new";
  changeflag(){
   
    this.flag=!this.flag
    this.style="new1"
  }
getdata(e:any){
  this.title=e
}

 }

