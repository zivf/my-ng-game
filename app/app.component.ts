import {Component, VERSION} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
      <div>
          <game [boardWidth]="10" [boardHeight]="10" ></game>
      </div>
`})
export class AppComponent {
}