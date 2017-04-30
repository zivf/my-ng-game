/**
 * Created by Eyal on 26/04/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'counter', 
  styles : [`
    .cc{
        font-size: 12px;
    }
  `],
  template: `
<div>
  <button (click)="up()">+</button>
  <span [style.font-size]="value+'px'">{{value}}</span>
  <button (click)="down()">-</button>  
</div>
`})
export class CounterComponent {
    value:number = 10;
    @Output() onValueChange: EventEmitter<number> = new EventEmitter();

    @Input() set init(val){
        this.value = val;
    }
    private _step:number;
    @Input()
    set step(value){
        this._step = value;
    }
    get step(){
        return this._step;
    }


    up(){
        this.value+=this.step;
        this.onValueChange.emit(this.value);
    }
    down(){
        this.value-=this.step;
    }
}