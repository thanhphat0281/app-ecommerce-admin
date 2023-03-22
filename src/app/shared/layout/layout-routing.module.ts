// import { Routes } from "@angular/router";
// import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
// import { BottomNavComponent } from "./bottom-nav/bottom-nav.component";
// import { SideNavComponent } from "./side-nav/side-nav.component";
// import { TopNavComponent } from "./top-nav/top-nav.component";

// export const LayoutRoutes : Routes = [
//       {
//         path:'dashboard',
//         component: DashboardComponent
//       },
//       {
//         path: 'dashboard',
//         children: [
//             {
//                 path:'',
//                 loadChildren: ()=> 
//                 import('../../pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
//             }
//         ]
       
//       },
//       {
//         path:'manage-book',
//         children: [{
//             path:'',
//             loadChildren:() => 
//             import('../../pages/manage-book/manage-book.module').then((m)=> m.ManageBookModule)
//         }]
       
//       },
//       {
//         path:'manage-author',
//         children: [{
//             path:'',
//             loadChildren:() => 
//             import('../../pages/manage-author/manage-author.module').then((m)=> m.ManageAuthorModule)
//         }]
       
//       },
//       {
//         path:'manage-category',
//         children: [{
//             path:'',
//             loadChildren:() => 
//             import('../../pages/manage-category/manage-category.module').then((m)=> m.ManageCategoryModule)
//         }]
        
//       }, 
   

// ]

