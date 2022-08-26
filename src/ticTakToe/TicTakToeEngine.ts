import { action, toJS, makeObservable, observable, values, configure, entries } from "mobx"
import { ICell } from "./@types/game";
import { CellState } from "./cellStateEnum";

/**
 * Tic-Tac-Toe game engine
 */
class TicTakToeEngine {

    readonly user: CellState = CellState.cross;
    readonly ai: CellState = CellState.zero;
    gameField: Array<number> = [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
    ];

    gameFieldCopy: Array<number> = [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
    ];

    constructor() {
        makeObservable(this, {
            gameField: observable,
            userStep: action,
        });
        configure({
            useProxies: "never"
        })
    }

    /**
     * Action
     * @param id line number
     */
    userStep(id: number) {
        this.gameField[id] = CellState.cross;
        this.gameFieldCopy[id] = CellState.cross;

        if(this.winChecking( this.gameFieldCopy.slice(0), CellState.cross)){
            alert("you win");
            return;
        }

        setTimeout(() => {
            this.calculateStep();
        }, 200);
    }

    calculateStep() {
        debugger
        const copyArr = this.gameFieldCopy.slice();

        const aiStep = this.findAiMove(copyArr);

        if (!aiStep) return false;

        this.gameField[aiStep] = this.ai;
        this.gameFieldCopy[aiStep] = this.ai;
       
        return true;
    }


    findAiMove(board: Array<number>) {
        let bestMoveScore = 100;
        let move = null;
        //Test Every Possible Move if the game is not already over.
        if (this.winChecking(board, this.user) || this.winChecking(board, this.ai)) {
            return null;
        }

        for (let i = 0; i < board.length; i++) {
            let newBoard = this.validMove(i, this.ai, board);
            //If validMove returned a valid game board
            if (newBoard) {
                let moveScore = this.userScore(newBoard);
                if (moveScore < bestMoveScore) {
                    bestMoveScore = moveScore;
                    move = i;
                }
            }
        }
        return move;
    }

    validMove(move: number, player: CellState, board: Array<number>) {
        var newBoard: number[] = board.slice()
        if (newBoard[move] === CellState.empty) {
            newBoard[move] = player;
            return newBoard;
        } else return null;
    }

    winChecking(board: Array<number>, player: CellState) {
        const comb1 = (board[0] === player && board[1] === player && board[2] === player);
        const comb2 = (board[3] === player && board[4] === player && board[5] === player);
        const comb3 = (board[6] === player && board[7] === player && board[8] === player);
        const comb4 = (board[0] === player && board[3] === player && board[6] === player);
        const comb5 = (board[1] === player && board[4] === player && board[7] === player);
        const comb6 = (board[2] === player && board[5] === player && board[8] === player);
        const comb7 = (board[0] === player && board[4] === player && board[8] === player);
        const comb8 = (board[2] === player && board[4] === player && board[6] === player);

        if (comb1 || comb2 || comb3 || comb4 || comb5 || comb6 || comb7 || comb8) {
            return true;
        }
        return false;
    }

    tie(board: Array<number>): boolean {
        var moves = board.filter(e => e === CellState.empty);
        return moves.length === 9
    }

    aiScore(board: Array<number>) {

        if (this.winChecking(board, this.user)) {
            return 10;
        } else if (this.winChecking(board, this.ai)) {
            return -10;
        } else if (this.tie(board)) {
            return 0;
        } else {
            var bestMoveValue = 100;
            for (var i = 0; i < board.length; i++) {
                var newBoard = this.validMove(i, this.ai, board);
                if (newBoard) {
                    var predictedMoveValue = this.userScore(newBoard);
                    if (predictedMoveValue < bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                    }
                }
            }
            return bestMoveValue;
        }
    }

    userScore(board: Array<number>) {
        if (this.winChecking(board, this.user)) {
            return 10;
        } else if (this.winChecking(board, this.ai)) {
            return -10;
        } else if (this.tie(board)) {
            return 0;
        } else {
            let bestMoveValue = -100;
            for (let i = 0; i < board.length; i++) {
                let newBoard = this.validMove(i, this.user, board);
                if (newBoard) {
                    let predictedMoveValue = this.aiScore(newBoard);
                    if (predictedMoveValue > bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                    }
                }
            }
            return bestMoveValue;
        }
    }
}


export default new TicTakToeEngine()