import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { FormsModule  } from '@angular/forms';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

	firstName: String;
	lastName: String;
	emailAddress: String;
	bloodGroup: String;
	contactNumber: String;
	userType: String;
	location: String;
	allDonors: Object[] = [];
	obj : any;

	constructor(
		private authService: AuthService,
		private flashMessage:FlashMessagesService
		) { }

	ngOnInit() { }


	addDonor() {
		const donor = {
			firstName: this.firstName,
			email: this.emailAddress,
			lastName: this.lastName,
			bloodGroup: this.bloodGroup,
			contactNumber: this.contactNumber,
			location: this.location
		}
		this.allDonors.push(donor)


		this.authService.registerDonor(donor).subscribe(data => {

			if(data){

				this.flashMessage.show('Your Information has been sent successfully', {cssClass: 'alert-success', timeout: 3000});
				this.authService.storeDonorData(data)
			} else {
				this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout: 3000});
			}
		});
	}
}

