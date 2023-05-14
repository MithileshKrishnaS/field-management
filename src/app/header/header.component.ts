import { Component, Input } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isMobile:boolean = false;
  userImage:string = 'assets/images/user.svg';

  constructor(public service: GlobalService) {}

  openMenu() {
    this.service.menuClick.next(true);
  }
}
