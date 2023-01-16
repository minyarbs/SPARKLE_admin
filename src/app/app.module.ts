import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule}  from'@angular/common/http';
import { ArchiveComponent } from './archive/archive.component';
import { NavComponent } from './nav/nav.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AdminsComponent } from './admins/admins.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ThemesComponent } from './themes/themes.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ArchiveComponent,
    NavComponent,
    SuppliersComponent,
    AdminsComponent,
    ReviewsComponent,
    ThemesComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
