import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCategoryRoutingModule } from './manage-category-routing.module';

import { ManageCategoryComponent } from './manage-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const declarations: any[] =[
  ManageCategoryComponent,
  ModifyCategoryComponent,
  ListCategoryComponent
  
]
const imports = [
  CommonModule, 
  ManageCategoryRoutingModule, 
  SharedModule,
  ReactiveFormsModule,

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
export class ManageCategoryModule { }
