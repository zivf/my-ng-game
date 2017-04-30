/**
 * Created by Eyal on 26/04/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoListService} from "./todo-list.service";
import {TodoListComponent} from "./todo-list.component";
import {TaskComponent} from "./todo-task.component";

@NgModule({
    declarations:[
        TodoListComponent,
        TaskComponent
    ],
    /*providers   :[
        TodoListService
    ],*/
    bootstrap   :[],
    imports     :[
        CommonModule
    ],
    exports     :[
        TodoListComponent
    ]
})
export class TodoListModule{}