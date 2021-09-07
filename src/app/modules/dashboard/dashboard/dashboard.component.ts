import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Dashboard } from 'src/app/services/dashboard/dashboardservice/dashboard_service';
import { DashboardService } from 'src/app/services/dashboard/dashboardservice/dashboard.service';
import { EventsService } from 'src/app/services/eventservice/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] | any;
  dashboard: Dashboard[] | any;
  displayMaximizable: boolean|any;
  items_activity: MenuItem[]|any;
  events: any|[];
  options: any;
  header: any;
  responsiveOptions:[]|any;
  
  constructor(private dashboardService: DashboardService,private eventService: EventsService,private messageService: MessageService) { 
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
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center:true,
    navSpeed: 200,
    navText: ['<i class="pi pi-fw pi-angle-left"></i>', '<i class="pi pi-fw pi-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  ngOnInit(): void {
    this.eventService.getEvents().then(events => {
      this.events = events;
      this.options = {...this.options, ...{events: events}};
  });

  this.options = {
          initialDate : '2019-01-01',
          headerToolbar: {
              left: '',
              center: '',
              right: 'prev,title,next'
          },
          views: {
        
            week: {
                titleFormat: " MMM D YYYY"
            },
            day: {
                titleFormat: 'D MMM, YYYY'
            }
        },
          editable: true,
          selectable:true,
          selectMirror: true,
          dayMaxEvents: true
  };
    this.items_activity = [
      {label: 'Cancel', icon: 'pi pi-times', command: () => {
          this.cancel_activity();
      }},
      {separator: true},
      {label: 'Reschedule', icon: 'pi pi-calendar', command: () => {
          this.reschedule_activity();
      }}
  ];
  
    this.dashboardService.getProducts().then(data => this.dashboard = data);
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
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  
  }
  save_activity(severity: string) {
    
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  cancel_activity() {
    console.log('Test')
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  reschedule_activity() {
    console.log('Test')
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }
  deleteSelecteddashboard(){

  }
  openNew(){

  }
  editProduct(dashboard: any){

  }
  deleteProduct(dashboard: any){

  }

  handleDateClick(calDate: any) {
    // console.log(calDate);
  }

  eventClicked(calDate: any) {
    // console.log(calDate);
  }
}

