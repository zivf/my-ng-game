import {Injectable} from "@angular/core";
import {TodoTask} from "./todoTask.model";


@Injectable()
export class TodoListService{
    tasks: TodoTask[] = [];
    tasks2:Map<number,TodoTask> = new Map();

    add(desc:string){
        let task = new TodoTask(desc);
        this.tasks.push(task);

        this.tasks2.set(task.id,task);
    }

    remove(id:number){
        let index = this.tasks.findIndex(t=>t.id===id);
        this.tasks.splice(index,1);

        this.tasks2.delete(id);
    }

    get totalIsDone(){
        return this.tasks.filter( t => t.isDone ).length;
    }
}