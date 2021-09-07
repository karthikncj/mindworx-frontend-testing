import { Time } from "@angular/common";

export interface Appointment {
    id?:string;
    code?:string;
    name?:string;
    date?:Date;
    time?:Time;
    provider?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}