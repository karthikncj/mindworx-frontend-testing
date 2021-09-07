import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AppointmentsComponent } from './modules/appointments/appointments/appointments.component';
import { HttpClientModule } from '@angular/common/http';
//PrimeNG

import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CarouselModule} from 'primeng/carousel';
import {TimelineModule} from 'primeng/timeline';
import {DropdownModule} from 'primeng/dropdown';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { HeaderComponent } from './modules/header/header/header.component';
import { FooterComponent } from './modules/footer/footer/footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar/sidebar.component';
import { ClassesComponent } from './modules/classes/classes.component';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import { UserprofileComponent } from './modules/dashboard/userprofile/userprofile.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppointmentsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ClassesComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MegaMenuModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    SplitterModule,
    TableModule,
    DividerModule,
    CarouselModule,
    PanelModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    FullCalendarModule,
    DropdownModule,
    StepsModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})  
export class AppModule { }
