import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'#',redirectTo:'/login',pathMatch:'full'},
  {path:'archive',component:ArchiveComponent},
  {path:'suppliers',component:SuppliersComponent},
  {path:'admins',component:AdminsComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'themes',component:ThemesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
