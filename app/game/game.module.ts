import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {GameControllerComponent} from "./game-controller.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations:[GameComponent, GameControllerComponent],
    providers   :[],
    bootstrap   :[],
    imports     :[
      CommonModule
    ],
    exports     :[GameComponent]
})
export class GameModule{}