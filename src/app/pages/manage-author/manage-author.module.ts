import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAuthorRoutingModule } from './manage-author-routing.module';
import { ManageAuthorComponent } from './manage-author.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InnerMsgDirective } from 'src/app/shared/directives/inner-msg.directive';
import { ModifyAuthorComponent } from './modify-author/modify-author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
const declarations: any[] =[
  ManageAuthorComponent,
  ModifyAuthorComponent,
  ListAuthorComponent
  
]
const imports = [
  CommonModule, 
  ManageAuthorRoutingModule, 
  SharedModule,
  ReactiveFormsModule,
  SharedModule, 
]

@NgModule({
  declarations: [...declarations],
  imports: [
    ...imports
  ]
})
export class ManageAuthorModule { }
