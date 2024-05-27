import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angchild',
  templateUrl: './angchild.component.html',
  styleUrl: './angchild.component.css'
})
export class AngchildComponent {
  constructor(private route:ActivatedRoute){

  }
  @Input()
name:string|undefined;

@Output()
c2p= new EventEmitter<String>();
GoTo(){
  this.c2p.emit("this text is from child")
}
ngOnInit(): void{
  console.log(this.route.snapshot.queryParams['category'])
}



}
