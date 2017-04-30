/**
 * Created by Eyal on 26/04/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'tab',
  styles : [],
  template: `
<div *ngIf="isActive">
  <ng-content></ng-content>
</div>
`})
export class TabComponent {
    @Input() title:string;
    isActive:boolean;

    constructor(){
        console.log(`tab constructor`);
    }

    ngOnDestroy(){
        console.log(`tab ngOnDestroy`);
    }
}