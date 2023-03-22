import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard.component';

import { SharedModule } from 'src/app/shared/shared.module';
const declarations = [
  DashboardComponent,
];
const imports: any = [
  SharedModule,
  CommonModule
]
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [
    ...declarations,
    ...imports
  ],
  providers: []
})
export class DashboardModule { }
