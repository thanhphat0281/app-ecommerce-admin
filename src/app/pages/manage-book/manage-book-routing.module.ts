import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBookComponent } from './list-book/list-book.component';
import { ManageBookComponent } from './manage-book.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';


const routes: Routes = [
  {
    path:'',
    component: ManageBookComponent,
  },
  {
    path:'modify-book',
    component: ModifyBookComponent
  },
  {
    path:'list-book',
    component: ListBookComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class ManageBookRoutingModule { }
