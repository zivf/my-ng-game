import {Component} from "@angular/core";
import {GameService} from "./game-service";

@Component({
  selector: 'gameController',
  styles : [],
  template: `<div style="width: 100%; font-family: Wingdings; font-size: 36px; cursor: hand;">
      <div style="width: 100%; text-align: center" (click)="onUp()">{{upArrowText}}</div>
      <div style="width: 100%; text-align: center;">
          <span (click)="onLeft()">{{leftArrowText}}</span>
          <span (click)="onRight()">{{rightArrowText}}</span>
      </div>
      <div style="width: 100%; text-align: center" (click)="onDown()">{{downArrowText}}</div>
  </div>`})
export class GameControllerComponent {
  arrowSetBase: number = 231; // possible bases: 215, 219, 223, 231, 239,

  constructor(private gameService: GameService) {}

  onUp() {
    this.gameService.moveUp();
  }

  onDown() {
    this.gameService.moveDown();
  }

  onLeft() {
    this.gameService.moveLeft();
  }

  onRight() {
    this.gameService.moveRight();
  }

  get upArrowText() {
    return String.fromCharCode(this.arrowSetBase+2);
  }

  get leftArrowText() {
    return String.fromCharCode(this.arrowSetBase);
  }

  get rightArrowText() {
    return String.fromCharCode(this.arrowSetBase+1);
  }

  get downArrowText() {
    return String.fromCharCode(this.arrowSetBase+3);
  }
}
