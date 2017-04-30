import {Component, Input} from "@angular/core";

@Component({
    selector: 'spinner',
    template: `
        <div>
            <button (click)="decrement()">[-]</button>
            <span> | {{currentValue}} | </span>
            <button (click)="increment()">[+]</button>
        </div>
    `
})
export class Spinnercomponent {
    @Input() currentValue: number;
    @Input() maxValue: number;
    @Input() minValue: number;

    increment() {
        if (this.currentValue < this.maxValue) {
            this.currentValue++;
        }
    }

    decrement() {
        if (this.currentValue > this.minValue) {
            this.currentValue--;
        }
    }
}