/**
 * Created by Eyal on 24/04/2017.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";
import {TodoListModule} from "./todolist/todolist.module";
import {TabsModule} from "./tabs/tabs.module";
import {Spinnercomponent} from "./spinner.component";
import {GameComponent} from "./game/game.component";
import {GameModule} from "./game/game.module";

@NgModule({
    declarations:[
        AppComponent,
        CounterComponent
    ],
    providers   :[],
    bootstrap   :[
        AppComponent
    ],
    imports     :[
        BrowserModule,
        TodoListModule,
        TabsModule,
        GameModule
    ],
    exports     :[]
})
export class AppModule{}
