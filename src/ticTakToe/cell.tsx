
import { observer } from "mobx-react-lite";
import React, { ReactNode } from "react";
import { ICell } from "./@types/game";
import { CellState } from "./cellStateEnum";
import gameCore from './TicTakToeEngine';

const Cell = observer((props:ICell) =>{

    let res: ReactNode;
    console.log("render cell")
    switch (props.state) {
        case CellState.cross:
            res = <div>X</div>
            break;
        case CellState.zero:
            res = <div>O</div>
            break;
        case CellState.empty:
            res = <div></div>
            break;
        default:
            break;
    }

    return (
        <div className="cell" onClick={() => gameCore.userStep(props.id)}>
            {res}
        </div>);
});

export default Cell

