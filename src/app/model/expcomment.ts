import { Experience } from "./experience";

export class Expcomment {
    id: number=0;
    text: string="";
    rating: number=0;
    date: Date=new Date();
    experience: Experience = new Experience();
}
