import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EachComponent } from './each/each.component';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';

const routes: Routes = [
  {path : '', component: DashboardComponent},
  {path : 'each', component: EachComponent},
  {path : 'staff', component: StaffComponent},
  {path : 'staff/:id', component: StaffDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
