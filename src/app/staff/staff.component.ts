import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffData: any = [];
  constructor(private service: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.service.getStaffData().subscribe(
    (res: any)=>{
      this.staffData = res;
    });
  }

  getUserData(each: any) {
    this.service.staffData = each;
    this.router.navigateByUrl('staff/'+each.id);
  }

}
