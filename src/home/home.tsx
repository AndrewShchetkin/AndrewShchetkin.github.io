import * as React from "react";
import GameField from "../ticTakToe/gameField";


export default class Home extends React.Component {
  render() {
    return <>
      <h4>Tic_Tac_Toe_Game</h4>
      <GameField array={[]} />
    </>;
  }
}
