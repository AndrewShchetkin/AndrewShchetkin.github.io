import React from "react";
import "./gameField.scss";
import Line from "./line";
import gameCore from './TicTakToeEngine';
import { observer } from "mobx-react-lite";
import { ICell, IGameFieldProps } from "./@types/game";



const GameField = observer((props: IGameFieldProps) => {

    const a = gameCore.gameField

    const line1 = a.slice(0, 3);
    const line2 = a.slice(3, 6);
    const line3 = a.slice(6, 9);

    return (
        <div className="layout">
            <div className="field">
                <Line cells={line1} key={'01'} />
                <Line cells={line2} key={'02'} />
                <Line cells={line3} key={'03'} />
            </div>
        </div>);
});

export default GameField;