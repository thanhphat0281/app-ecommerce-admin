import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'manage-book',

    loadChildren: () =>
      import('./pages/manage-book/manage-book.module').then(
        (m) => m.ManageBookModule
      ),
  },
  {
    path: 'manage-author',

    loadChildren: () =>
      import('./pages/manage-author/manage-author.module').then(
        (m) => m.ManageAuthorModule
      ),
  },
  {
    path: 'manage-category',

    loadChildren: () =>
      import('./pages/manage-category/manage-category.module').then(
        (m) => m.ManageCategoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
