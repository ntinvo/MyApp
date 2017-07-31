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
import { AuthenticationGuard } from './guards/authentication.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
  { path: 'authresults', component: AuthResultsComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
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
    AuthResultsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [ ValidateService, AuthenticateService, AuthenticationGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
