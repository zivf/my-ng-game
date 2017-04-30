import {Component, VERSION} from "@angular/core";

@Component({
  selector: 'my-app',
  styles : [`
    .box{
        
    }
  `],
  template: `
      <div>
          <game [boardWidth]="10" [boardHeight]="10" ></game>
      </div>
      <div>
          <game [boardWidth]="8" [boardHeight]="6" ></game>
      </div>
`})
export class AppComponent {
}