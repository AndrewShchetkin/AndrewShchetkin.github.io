import { CellState } from "../cellStateEnum"


export interface ICell{
    id: number,
    state: CellState,
    line: number,
    cellPosition: number
}

export interface IGameFieldProps {
    array: Array<Array<ICell>>
}