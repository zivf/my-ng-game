import {Component, Input} from "@angular/core";
import {GameService} from "./game-service";

@Component({
  selector: 'game',
  styles : ['.wasVisited { background-color: wheat }',
      '.hasBomb { background-color: yellow }',
      '.playerCell { background-color: red }',
      'table { margin: 10px 100px 0 0 }',
      'td { padding: 10px }',
      '.cell { padding: 0px; width: 20px; height: 20px; }'
  ],
  providers: [GameService],
  template: `
    <table width="100%" tabindex="1" [style.background-color]="getBackground()" 
           (keydown)="keyDown($event)" (focus)="gameFocused()" (blur)="gameUnfocused()">
        <tr>
            <td align="center">Level: {{gameLevel}}</td>
            <td>Score: {{currentScore}}</td>
        </tr>
        <tr>
            <td>
                <gameController></gameController>
            </td>
            <td>
                <table cellpadding="0" cellspacing="0" border="1">
                    <tr *ngFor="let y of countTo(boardHeight)">
                        <td *ngFor="let x of countTo(boardWidth)" [ngClass]="getCellClasses(x,y)">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`})
export class GameComponent {
    constructor(public gameService: GameService) {}

    get currentScore() {
        return this.gameService.movesCount;
    }

    keyDown(evt) {
        if (evt.keyCode === 39) {
            this.gameService.moveRight();
        } else if (evt.keyCode === 37) {
            this.gameService.moveLeft();
        } else if (evt.keyCode === 38) {
            this.gameService.moveUp();
        } else if (evt.keyCode === 40) {
            this.gameService.moveDown();
        }
    }

    getCellClasses(x:number, y:number) {
        const theStyles = {
            cell: true,
            playerCell: x === this.gameService.player.x && y === this.gameService.player.y,
            wasVisited: this.gameService.getCellVisited(x,y),
            hasBomb: this.gameService.hasBombIn(x,y)
        };
        return theStyles;
    }

    countTo(num:number){
        return Array(num).fill(0).map((x, i) => i);
    }

    get boardWidth() { return this.gameService.boardWidth; }
    @Input() set boardWidth(val: number) {
        this.gameService.boardWidth=val;
    }

    get boardHeight() { return this.gameService.boardHeight; }
    @Input() set boardHeight(val: number) {
        this.gameService.boardHeight=val;
    }

    get gameLevel() {
        return this.gameService.level;
    }

    backgroundColor: string = "white";

    gameFocused() {
        this.backgroundColor = "silver";
    }

    gameUnfocused() {
        this.backgroundColor = "white";
    }

    getBackground() {
        return this.backgroundColor;
    }
}