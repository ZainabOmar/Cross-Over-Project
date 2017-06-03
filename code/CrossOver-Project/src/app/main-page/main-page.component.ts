import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ValidateService} from '../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { FormGroup, FormControl } from '@angular/forms';

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

	showUserType= false;
	showUserInfo= false;

	patientFlag= false;
	donorFlag= false;
	patientButton= true;
	donorButton= true;
	disabled = false;

	constructor(
		private authService: AuthService,
		private validateService: ValidateService,
		private flashMessage:FlashMessagesService
		) { }

	ngOnInit() { }

	geoFindMe() {
		var output = document.getElementById("out");

		if (!navigator.geolocation){
			output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
			return;
		}

		function success(position) {
			var latitude  = position.coords.latitude;
			var longitude = position.coords.longitude;

			output.innerHTML = 'Thanks for helping us getting your Location';

			console.log("Latitude: " + position.coords.latitude + 
				" Longitude: " + position.coords.longitude)
		}

		function error() {
			output.innerHTML = "Unable to retrieve your location";
		}
		output.innerHTML = "<p>Locating…</p>";
		navigator.geolocation.getCurrentPosition(success, error);
	}

	donFlag() {
		this.donorFlag = !this.donorFlag;
		this.patientButton = !this.patientButton;
	}

	patFlag() {
		this.patientFlag = !this.patientFlag;
		this.donorButton = !this.donorButton;
	}

	div_show_userType() {
		document.getElementById('userType').style.display = "block";
		this.showUserType = false;
	}

	addDonor() {
		const donor = {
			firstName: this.firstName,
			email: this.emailAddress,
			lastName: this.lastName,
			bloodGroup: this.bloodGroup,
			contactNumber: this.contactNumber
		}


		this.authService.registerDonor(donor).subscribe(data => {

			if(data){
				console.log(data, "this is data")
				console.log(donor, "this is donor")

				this.flashMessage.show('Your Information has been sent successfully', {cssClass: 'alert-success', timeout: 3000});
				this.authService.storeDonorData(data)
			} else {
				this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout: 3000});
			}
		});
		}
	}

