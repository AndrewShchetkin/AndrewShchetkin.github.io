import { CellState } from "../cellStateEnum"


export interface ICell{
    id: number,
    state: CellState,
}

export interface IGameFieldProps {
    array: Array<Array<ICell>>
}