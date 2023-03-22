import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const declarations: any[] = [ 
  LayoutComponent,
  TopNavComponent,
  SideNavComponent,
  BottomNavComponent
];
const imports = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule
  
]

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...declarations, ...imports],

})
export class LayoutModule { }
