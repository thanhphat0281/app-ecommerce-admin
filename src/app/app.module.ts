import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

const declarations = [
  AppComponent,
 
];
const imports: any = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  RouterModule,
  LayoutModule,
  SharedModule,
  BrowserAnimationsModule
 
]

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
