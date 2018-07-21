import { DashboardModule } from './dashboard/dashboard.module';
// Modules
import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';

// Services
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { UsersModule } from './users/users.module';

@NgModule({
	declarations: [
		AppComponent,
		PortfoliosComponent
	],
	imports: [
		BrowserModule,
		// BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		AppRoutingModule,
		UsersModule,
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
