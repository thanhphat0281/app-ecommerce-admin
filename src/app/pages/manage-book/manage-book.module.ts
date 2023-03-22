import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBookRoutingModule } from './manage-book-routing.module';
import { ManageBookComponent } from './manage-book.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { InnerMsgDirective } from 'src/app/shared/directives/inner-msg.directive';
import { ListBookComponent } from './list-book/list-book.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';


const declarations: any[] =[
  ManageBookComponent,
  ListBookComponent,
  ModifyBookComponent
]
  


const imports = [
  CommonModule,
  ManageBookRoutingModule,
  SharedModule
 
]
@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [
    ...declarations,
    ...imports
  ],
  providers:[]
})
export class ManageBookModule { }
