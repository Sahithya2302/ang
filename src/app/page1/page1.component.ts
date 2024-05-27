import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
constructor(private route:ActivatedRoute,private route1:Router){

}
ngOnInit(): void{
  console.log(this.route.snapshot.params["id"])
  console.log(this.route.snapshot.params["id1"])
  
  this.route1.navigate(["/child"],{queryParams:{category:"education"}})
}

}
