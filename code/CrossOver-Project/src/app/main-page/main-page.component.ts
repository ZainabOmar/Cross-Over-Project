import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

	firstName: String;
	lastName: String;
	email: String;
	bloodGroup: String;
	contactNumber: String;
	userType: String;

	showUserType= false;
	showUserInfo= false;

	patientFlag= false;
	donorFlag= false;
	patientButton= true;
	donorButton= true;

	constructor() { }

	ngOnInit() {}

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
		console.log("donor added")
		const user = {
      firstName: this.firstName,
      email: this.email,
      lastName: this.lastName,
      bloodGroup: this.bloodGroup,
      contactNumber: this.contactNumber
    }
	}
}
