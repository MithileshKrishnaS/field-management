import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any = [];
  menuClicked: boolean = false;
  @Input() isMobile:boolean = false;

  constructor(private router: Router, private service: GlobalService) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const path = window.location.pathname.substring(1);
        this.menuItems.forEach((each: any)=>{
          if(each.route === path) {
            each.active = true;
          } else {
            each.active = false;
          }
        })
      }
    });
  }

  ngOnInit(): void {
    this.menuItems.push({name: 'dasboard', src:'assets/images/dash.svg', route: '', isHover: false, active: false});
    this.menuItems.push({name: 'staff', src:'assets/images/profile.svg', route: 'staff', isHover: false, active: false});
    this.service.menuClick.subscribe((res)=>{
      this.menuClicked = res;
    });
  }

  navigate(each: any) {
    this.router.navigateByUrl(each.route);
    this.service.menuClick.next(false);
  }

  closeMenu() {
    this.service.menuClick.next(false);
  }
}
