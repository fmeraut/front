import { Place } from "./place";

export class Guide{
	id:number = 0;
	title:string ="";
	country:string ="";
	images:any;
	validated:boolean = false;
	rating:string = "";
	text:string="";
	place:Place=new Place();


	

}