import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngchildComponent } from './angchild/angchild.component';
import { Page1Component } from './page1/page1.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashoComponent } from './dasho/dasho.component';

@NgModule({
  declarations: [
    AppComponent,
    AngchildComponent,
    Page1Component,
    NotfoundComponent,
    DashoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
