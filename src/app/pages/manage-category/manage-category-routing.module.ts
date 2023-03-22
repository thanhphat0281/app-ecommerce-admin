import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';

import { ManageCategoryComponent } from './manage-category.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';


const routes: Routes = [
  // { path: '', redirectTo: 'list-category', pathMatch: 'full' },
  {
    path:'',
    component:ManageCategoryComponent,
  },
  {
    path:'list-category',
    component: ListCategoryComponent
  },
  {

    path:'modify-category',
    component: ModifyCategoryComponent
  }
  // {
  //   path:'',
  //   component:ManageCategoryComponent,
  //   children: [
  //     {
  //       path:'modify-category',
  //       component: ModifyCategoryComponent
  //     }
     
  //   ]
  // },
  
 
 
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCategoryRoutingModule { }
