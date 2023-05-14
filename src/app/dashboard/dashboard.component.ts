import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any = [];
  countByStatus: any = {};
  eachTypeData: any = {};

  constructor( public service : GlobalService, public router : Router) {}

  ngOnInit(): void {
    this.service.getInputData().subscribe((res)=>{
      this.data = res;
      this.countByStatus.total_jobs = this.data.length;
      this.data.forEach((each: any) => {
        let status = each.status;
        if (!Object.keys(this.countByStatus).length ||
         !Object.keys(this.countByStatus).includes(each.status)) {
          this.countByStatus[status] = 1;
        } else {
          this.countByStatus[status]++;
        }
        if (!this.eachTypeData[status]) {
          this.eachTypeData[status] = [];
        }
        this.eachTypeData[status].push(each);
      });
    });
  }

  eachStatus(each: any) {
    this.service.eachType = {};
    if(each.key == 'total_jobs') {
      let arr:any = [];
      this.service.eachType[each.key] = arr.concat(...Object.values(this.eachTypeData));
    } else {
      this.service.eachType[each.key] = this.eachTypeData[each.key];
    }
    this.router.navigateByUrl('/each');
  }

}
