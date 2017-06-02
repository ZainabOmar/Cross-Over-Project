import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

	showForm: false;

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

	div_show() {
		document.getElementById('form').style.display = "block";
		this.showForm = false;
	}

	addUser() {
		console.log("hello there")
	}
}
