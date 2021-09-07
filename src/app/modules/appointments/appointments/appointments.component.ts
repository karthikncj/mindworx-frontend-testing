import { Component, OnInit } from '@angular/core';
// import {CardModule} from 'primeng/card';
// import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import{Appointment} from 'src/app/services/appointment/appointment_service';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
// import {DropdownModule} from 'primeng/dropdown';
import { CalendarOptions } from '@fullcalendar/angular';
// import {SplitButtonModule} from 'primeng/splitbutton';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  items: MenuItem[] | any;
  appointment: Appointment[] | any;
  events: any|[];
  options: any;
  header: any;
  spliticon: MenuItem[]|any;
  mw: MonthWeek[] |any;
  selectedMW: MonthWeek|any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  carService: any;
  cars: any;
  responsiveOptions: any |{ breakpoint: string; numVisible: number; numScroll: number; }[];

  constructor(private appointmentService: AppointmentService,) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
      this.mw = [
          {name: 'Previous Month', code: 'PM'},
          {name: 'Previous 7 Days', code: 'P7D'},
          {name: 'Next 7 Days', code: 'N7D'},
          {name: 'This Month', code: 'TM'},
          {name: 'Next Month', code: 'NM'}
      ];
  
  }

  ngOnInit(): void {
    this.appointmentService.getProducts().then(data => this.appointment = data);
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: '', icon: 'pi pi-fw pi-calendar'},
              {label: '', icon: 'pi pi-fw pi-calendar'}
          ]
      }
  ];
  this.spliticon = [
            {label: 'Cancel', icon: 'pi pi-calendar', command: () => {}},
            
            {label: 'Reschedule', icon: 'pi pi-calendar', command: () => {}},
             ];
  }
  }
interface MonthWeek {
  name: string,
  code: string
}