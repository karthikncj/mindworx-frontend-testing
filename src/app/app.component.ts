import { Component } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mindworx';
  items: MegaMenuItem[] | any;
  myimgc1:string="assets/img/carousel card/mom.png";
  myimgc2:string="assets/img/carousel card/Nutrition Tips.png";
  myimgc3:string="assets/img/carousel card/watch videos.png";
  myimgc4:string="assets/img/carousel card/Nutrition image.png";
  myimgc5:string="assets/img/carousel card/yoga.png";
  myimgc6:string="assets/img/carousel card/mom.png";
  myimgc7:string="assets/img/carousel card/mom.png";
  myimgc8:string="assets/img/carousel card/mom.png";
  logo:string="assets/img/logo/logo1.png";
  cla:string="assets/img/icons/Class.png";
  db:String="assets/img/icons/dashboard.png";
  hp:string="assets/img/icons/help.png";
  sc:string="assets/img/icons/selfcare.png";
  
}
