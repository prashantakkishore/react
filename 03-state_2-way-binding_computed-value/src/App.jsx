import { useState } from "react"
import GameBoard from "./Gameboard"
import { Player } from "./Player"
import Log from "./Log";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [turns, setTurns] = useState([]);

  function handleSelectPlayer() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }

  function updateTurns(turn) {
    turns.push(turn);
  }
  return (
    <main>
      <div>
        <div >Scoreboard......</div>
      <div id="game-container" >
        <img src="shyla-1.JPG" height='50px' width='50px' alt="" />
        <img src="vidyut-1.JPG" height='50px' width='50px' alt="" align="right" />
        <ol id="players" className="highlight-player">
          <Player name='Shyla' symbol='X' isActive={activePlayer === 'X'} />
          <Player name='Vidyut' symbol='O' isActive={activePlayer === 'O'} />

        </ol>
        <GameBoard onSelectSquare={handleSelectPlayer} currentPlayerSymbol={activePlayer} updateTurns={updateTurns}/>
        <Log turns={turns}/>
      </div>
      </div>
    </main>

  )
}

export default App
