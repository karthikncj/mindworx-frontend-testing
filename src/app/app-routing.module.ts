import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AppointmentsComponent } from './modules/appointments/appointments/appointments.component';
import { ClassesComponent } from './modules/classes/classes.component';

const routes: Routes = [
{ path: '*', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: '', component: DashboardComponent },
 { path: 'appointments', component: AppointmentsComponent },
 { path: 'Classes', component: ClassesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
