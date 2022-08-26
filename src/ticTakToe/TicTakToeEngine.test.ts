import { CellState } from "./cellStateEnum";
import TicTakToeEngine from "./TicTakToeEngine";

describe("winChecking", () => {
    test("first line combination", () => {

        const baseBoard = TicTakToeEngine.gameField;
        const board = TicTakToeEngine.gameField.slice();

        const user = CellState.cross
        board[0] = user;
        board[1] = user;
        board[2] = user;

        expect(TicTakToeEngine.winChecking(board, user)).toBe(true);
        expect(baseBoard !== board).toBe(true);
    })
});