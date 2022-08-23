import { observer } from "mobx-react-lite";
import React from "react";
import { ICell } from "./@types/game";
import Cell from "./cell";

const Line = observer((props: { cells: ICell[] }) => {
    return <div className="line">
        {props.cells.map(i => <Cell
            id={i.id}
            state={i.state}
            cellPosition={i.cellPosition}
            line={i.line} 
            key={i.id}/>)}
    </div>;
});

export default Line;
