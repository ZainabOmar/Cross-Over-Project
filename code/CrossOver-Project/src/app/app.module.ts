import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
	declarations: [
	AppComponent,
	MainPageComponent
	],
	imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot([
		{path: '', component: MainPageComponent}])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
