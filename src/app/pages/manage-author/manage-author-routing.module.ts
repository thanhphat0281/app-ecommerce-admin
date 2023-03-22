import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAuthorComponent } from './list-author/list-author.component';
import { ManageAuthorComponent } from './manage-author.component';
import { ModifyAuthorComponent } from './modify-author/modify-author.component';


const routes: Routes = [
  {
    path:'',
    component: ManageAuthorComponent
  },
  {
    path:'modify-author',
    component: ModifyAuthorComponent
  },
  {
    path:'list-author',
    component: ListAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAuthorRoutingModule { }
