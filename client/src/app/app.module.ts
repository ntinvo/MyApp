import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { ValidateService } from './services/validate.service';
import { AuthenticateService } from './services/authenticate.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthResultsComponent } from './components/auth-results/auth-results.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'authresults', component: AuthResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    HeaderComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    AuthResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [ ValidateService, AuthenticateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
