import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface eachType  {
  [key: string]: Array<{ [key: string]: any }>
}

export interface staffData {
  name: string,
  id: number,
  blood_group: string,
  dob: string,
  gender: string
}

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  public eachType : eachType = {};
  public staffData : staffData;
  menuClick = new BehaviorSubject<boolean>(false);
  api = 'https://field-node.onrender.com/';

  constructor( private http : HttpClient) {
    this.staffData = {name: '', id: 0, blood_group: '', dob: '', gender:''};
  }
  

  public getInputData() {
    return this.http.get(this.api + 'input');
  }

  public getStaffData() {
    return this.http.get(this.api + 'staff');
  }

}
