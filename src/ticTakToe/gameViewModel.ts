import { action, configure, makeObservable, observable } from "mobx";
import { ICell } from "./@types/game";
import { CellState } from "./cellStateEnum";
import TicTakToeEngine from "./TicTakToeEngine";

export default class GameViewModel {

    gameField: Array<ICell> = [];
    gameCore = TicTakToeEngine;

    constructor() {
        makeObservable(this, {
            gameField: observable,
            userStep: action,
        });
        configure({
            useProxies: "never"
        })
    }


    public userStep(id: number) {
        this.gameCore.userStep(id);
    }
    
}