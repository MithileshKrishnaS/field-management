import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { LetterspellPipe } from './letterspell.pipe';
import { EachComponent } from './each/each.component';
import { FormsModule } from '@angular/forms';
import { FilterValuePipe } from './filter-value.pipe';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LetterspellPipe,
    EachComponent,
    FilterValuePipe,
    StaffComponent,
    StaffDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
