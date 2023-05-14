import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-each',
  templateUrl: './each.component.html',
  styleUrls: ['./each.component.css']
})
export class EachComponent implements OnInit {
  statusData: any = [];
  status: string = '';
  staffList: any =  [];
  filterData: string = '';
  constructor(public service: GlobalService, public router : Router) {}

  ngOnInit(): void {
    if(!Object.keys(this.service.eachType).length) {
      this.router.navigateByUrl('');
    } else {
      this.status = Object.keys(this.service.eachType)[0];
      this.statusData = JSON.parse(JSON.stringify(this.service.eachType[this.status]));
      this.service.getStaffData().subscribe(
        (res) => {
          this.staffList = res;
          this.getStaffname(this.staffList);
        }
      )
    }
  }

  getStaffname(staffList: any) {
    this.statusData.forEach((each: any, i: any)=>{
      each.assigned_to.forEach((e: any, j: any)=>{
        const eachData = staffList.find((s: any)=>s.id===e);
        const data = {id: eachData.id, name: eachData.name};
        this.statusData[i].assigned_to[j] = data;
      });
    });
  }

  getUserData(id: any) {
    const data = this.staffList.filter((each:any)=>each.id === id);
    this.service.staffData = data[0];
    this.router.navigateByUrl('staff/'+id);
  }

}
