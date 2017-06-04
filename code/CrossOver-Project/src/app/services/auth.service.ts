import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  donor: any;

  storeDonorData(data){
      localStorage.setItem('data', data);
    }

    registerDonor(donor){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/postDonor', donor,{headers: headers})
    .map(res => res.json());
  }

   getDonors(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/api/getDonors', {headers: headers})
    .map(res => res.json());
  }

}