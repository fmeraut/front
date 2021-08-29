import { Place } from "./place";

export class PlaceComment {
    id: number=0;
    text: string="";
    note: number=0;
    date: Date=new Date();
    experience: Place = new Place();
}
