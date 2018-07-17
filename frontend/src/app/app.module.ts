// Modules
import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserAddComponent} from './users/user-add.component';
import {UserUpdateComponent} from './users/user-update.component';

// Services
import {UserService} from './users/user.service';
import { PortfoliosComponent } from './portfolios/portfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
