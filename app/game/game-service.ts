import {Injectable, Input, OnInit} from "@angular/core";
import {MAX_LENGTH_VALIDATOR} from "@angular/forms/src/directives/validators";

export class Coord{
    constructor(
        public x: number,
        public y: number)
    {}
}

@Injectable()
export class GameService {
    player: Coord = new Coord(0,0);
    _boardWidth?: number;
    _boardHeight?: number;
    bombs: Coord[] = [];
    visitedCells = {};
    movesCount: number = 0;
    _level?: number = 3;

    initBoard() {
        if (this.level !== null && this._boardWidth !== null && this._boardHeight !== null){
            this.setCellVisited(this.player.x, this.player.y);
            this.bombs = Array(this.level).fill(0).map(_ => {
                const tx = Math.floor(Math.random() * this.boardWidth);
                const ty = Math.floor(Math.random() * this.boardHeight);
                return new Coord(tx, ty);
            });
        }
    }

    get level() { return this._level; }
    set level(lv: number) {
        this._level = lv;
        this.initBoard();
    }

    get boardWidth() { return this._boardWidth; }
    set boardWidth(bw: number) {
        this._boardWidth = bw;
        this.initBoard();
    }

    get boardHeight() { return this._boardHeight; }
    set boardHeight(bh: number) {
        this._boardHeight = bh;
        this.initBoard();
    }

    youLost() {
        alert('you lost!!! hehehehe')
    }

    getCellVisited(x: number, y: number) {
        return this.visitedCells[`${x},${y}`] === true;
    }

    setCellVisited(x: number, y: number) {
        this.visitedCells[`${x},${y}`] = true;
    }

    tryMove(pos: Coord) {
        if (pos.x < 0 || pos.y < 0 || pos.x > this.boardWidth - 1 || pos.y > this.boardHeight -1) {
            return;
        }
        else if (this.bombs.filter(b => b.x===pos.x && b.y===pos.y).length > 0) {
            this.youLost()
        } else {
            this.player = pos;
            this.movesCount++;
            this.setCellVisited(pos.x, pos.y);
        }
    }

    moveUp() {
        this.tryMove(new Coord(this.player.x, this.player.y-1));
    }

    moveDown() {
        this.tryMove(new Coord(this.player.x, this.player.y+1));
    }

    moveLeft() {
        this.tryMove(new Coord(this.player.x-1, this.player.y));
    }

    moveRight() {
        this.tryMove(new Coord(this.player.x+1, this.player.y));
    }

    hasBombIn(x: number, y: number): boolean {
        const zzz = this.bombs.filter(temp => temp.x===x && temp.y===y);
        return zzz.length > 0;
    }
}