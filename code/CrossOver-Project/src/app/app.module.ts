import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [
	AppComponent,
	MainPageComponent
	],
	imports: [
	FormsModule,
	BrowserModule,
	HttpModule,
	FlashMessagesModule,
	RouterModule.forRoot([
		{path: '', component: MainPageComponent}])
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
