import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { AngchildComponent } from './angchild/angchild.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [{
path:"pag1/:id/:id1",
component:Page1Component
},{
  path:"home",
component:AppComponent
},
{
  path:"child",
component:AngchildComponent
},
{
  path:"",
  pathMatch:'full',
  redirectTo:"child",
},
{
  path:"dashboard",
loadChildren:()=>import("./dashboard/dashboard.module").then(e=>e.DashboardModule)},
{
  path:"**",
  component:NotfoundComponent
},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
