import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from "@angular/forms";


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

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
	providers: [ValidateService,AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
