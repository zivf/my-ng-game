/**
 * Created by Eyal on 26/04/2017.
 */
import {Component, Input} from "@angular/core";
import {TodoTask} from "./todoTask.model";
import {TodoListService} from "./todo-list.service";

@Component({
  selector: 'task',
  styles : [],
  template: `
<div>
    <input
            type="checkbox"
            (change)="setIsDone($event,task)"
            [checked] ="task.isDone"
    />
    {{task.desc}}
    <button (click)="onDel()">x</button>
</div>
`})
export class TaskComponent {
    @Input('source') task:TodoTask;

    constructor(private service:TodoListService){}

    setIsDone(arg){
        this.task.isDone = arg.target.checked;
    }
    onDel(){
        this.service.remove(this.task.id);
    }
}