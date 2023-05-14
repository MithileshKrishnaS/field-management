import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
// import {} from "../../../src/assets/images/user.svg";
@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  userImage:string;
  staffdata: any;
  constructor(private service: GlobalService, private router: Router) {
    this.userImage = 'assets/images/user.svg';
  }

  ngOnInit(): void {
    this.staffdata = this.service.staffData;
    if(this.staffdata.name === '' &&
     this.staffdata.blood_group === '' &&
     this.staffdata.dob === '' && this.staffdata.gender === '') {
      this.router.navigateByUrl('');
    }
  }
}
