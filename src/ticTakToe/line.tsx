import { observer } from "mobx-react-lite";
import React from "react";
import { ICell } from "./@types/game";
import Cell from "./cell";

const Line = observer((props: { cells: number[] }) => {
    return <div className="line">
        {props.cells.map((i, indx) => <Cell id={indx} state={i} key={indx}/>)}
    </div>;
});

export default Line;
