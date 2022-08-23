import React from "react";
import "./gameField.scss";
import Line from "./line";
import gameCore from './gameCore';
import { observer } from "mobx-react-lite";
import { ICell, IGameFieldProps } from "./@types/game";



const GameField = observer((props: IGameFieldProps) => {

    const a = gameCore.gameField

    return (
        <div className="layout">
            <div className="field">
                {a.map((e: ICell[]) => <Line cells={e} key={a.indexOf(e)}/>)}
            </div>
        </div>);
});

export default GameField;