/**
 * Created by Eyal on 26/04/2017.
 */
import {Component} from "@angular/core";
import {TodoListService} from "./todo-list.service";
import {TodoTask} from "./todoTask.model";

@Component({
  selector: 'todo-list',
    providers   :[
        TodoListService
    ],
  styles : [`
    .todo{
        border: 1px solid black;
    }
  `],
  template: `
<div class="todo">
 <h3>Todo List Demo</h3>   
 desc: <input type="text" #i/> <button (click)="add(i.value)">Add Task</button>
 <hr>   

     <task 
             *ngFor="let task of tasks"
             [source]="task">
     </task>

 <hr>
 <h4>Total tasks: {{tasks.length}}, done: {{service.totalIsDone}}</h4>   
</div>
`})
export class TodoListComponent {

    get tasks(){
        return this.service.tasks;
    }

    constructor(private service:TodoListService){}

    add(desc:string){
        this.service.add(desc);
    }

}