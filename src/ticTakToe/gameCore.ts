import { makeAutoObservable } from "mobx"
import { ICell } from "./@types/game";
import { CellState } from "./cellStateEnum";

/**
 * Tic-Tac-Toe game engine
 */
class TicTakToeEngine {
    gameField: Array<Array<ICell>> = [
        [
            { id: 0, state: 2, line: 0, cellPosition: 0 },
            { id: 1,state: 2, line: 0, cellPosition: 1 },
            { id: 2,state: 2, line: 0, cellPosition: 2 }
        ], [
            { id: 3,state: 2, line: 1, cellPosition: 0 },
            { id: 4,state: 2, line: 1, cellPosition: 1 },
            { id: 5,state: 2, line: 1, cellPosition: 2 }
        ], [
            { id: 6,state: 2, line: 2, cellPosition: 0 },
            { id: 7,state: 2, line: 2, cellPosition: 1 },
            { id: 8,state: 2, line: 2, cellPosition: 2 }
        ]
    ]

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * Action
     * @param line line number
     * @param cell cell number
     */
    public userStep(line: number, cell: number) {
        this.gameField[line][cell].state = CellState.cross;
        setTimeout(() => {   
            this.calculateStep();
        }, 200);
    }

    private computerStep(line: number, cell: number){
        this.gameField[line][cell].state = CellState.zero;
        console.log(this.gameField[line][cell]);
    }

    private randomCell(): {line: number, cell: number}{
        Math.random()
        return {line: Math.floor(Math.random() * 3) , cell: Math.floor(Math.random() * 3)}
    }

    private calculateStep() {
        console.log('compute step');
        const step = this.randomCell();
        console.log(step);
        if (this.gameField[step.line][step.cell].state === CellState.empty) {
            this.computerStep(step.line, step.cell);
        } else {
            this.calculateStep();
        }
    }

    private winChecking(){
        for (let index = 0; index < this.gameField.length; index++) {
            const element = this.gameField[index];
            
        }
    }
}


export default new TicTakToeEngine()