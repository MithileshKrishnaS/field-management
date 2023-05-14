import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'field-management-app';
  isMobile: boolean = false;
  constructor() {
    this.setSize();
  }
  @HostListener("window:resize", ["$event"])
  getScreenSize(_event: any) {
    this.setSize();
  }

  setSize() {
    if(window.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
