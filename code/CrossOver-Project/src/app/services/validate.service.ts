import { Injectable } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class ValidateService {
	// complexForm : FormGroup;
	constructor() { 

	// 	this.complexForm = fb.group({
	// 		'firstName' : [null, Validators.required],
	// 		'lastName': [null, Validators.required],
	// 		'email' : [null, Validators.required],
	// 		'contactNumber' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(13)])],
	// 		'bloodGroup' :[null, Validators.required]
	// 	})
	// }

	// submitForm(value: any){
 //    console.log(value);
  }

	validateEmail(email){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

}
