import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerMsgDirective } from './directives/inner-msg.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const declarations: any[] = [
  InnerMsgDirective
];
const imports = [
  CommonModule, 
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];


@NgModule({
  declarations: [...declarations],
  imports: [
    ...imports
  ],
  exports: [
    ...imports,
    ...declarations
  ]
})
export class SharedModule { }
