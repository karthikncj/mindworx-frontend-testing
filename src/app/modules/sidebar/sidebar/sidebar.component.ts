import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  side_bar_display: any;
  constructor() { }
  items: MegaMenuItem[] |any;

  activeMenu(event: any) {

    let node;
    if (event.target.tagName === "A") {
      node = event.target;
    } else {
      node = event.target.parentNode;
    }
    let menuitem = document.getElementsByClassName("p-menuitem-link");
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove("active");
    }
    node.classList.add("active")
    }

  visibleSidebar1:any;
  ngOnInit() {
      this.items = [
          {
              label: '', icon: 'pi pi-fw pi-angle-right test',command: ($event: any) => {
                this.visibleSidebar1 = true;
                let classList = (document.querySelector('.sidebar_menu') as HTMLElement);
                if(classList.classList.contains('active')){
                  this.visibleSidebar1 = false;
                  } else {
                    this.visibleSidebar1 = true;
                  }
                
              }
          },
          {
              label: 'Dashboard', icon: 'fa fa-chart-pie',routerLink:'dashboard'
          },
          {
              label: 'Appointment', icon: 'pi pi-fw pi-calendar',routerLink:'appointments'
          },
          {
              label: 'Groups', icon: 'pi pi-fw pi-users',
          },
          {
              label: 'Classes', icon: 'fa fa-universal-access',routerLink:'Classes'
          },

          {
            label: 'SelfCare', icon: 'pi pi-fw pi-plus-circle',
        },
        {
            label: 'Help', icon: 'fa fa-question-circle',
        }
      ]
  }
}
