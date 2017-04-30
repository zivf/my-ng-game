/**
 * Created by Eyal on 26/04/2017.
 */
let counter = 0;

export class TodoTask{
    id:number;
    isDone:boolean;
    desc:string;

    constructor(desc:string, isDone:boolean = false){
        this.id     = counter++;
        this.desc   = desc;
        this.isDone = isDone;
    }
}