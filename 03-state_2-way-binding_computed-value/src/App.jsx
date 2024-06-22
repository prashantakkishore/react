import { Player } from "./player"

function App() {


  return (
    <main>
      
      <div id="game-container">
      <img src="shyla-1.JPG"  height='50px' width='50px' alt="" />
      <ol id="players">
        <Player name='Player 1' symbol='x' />
        <Player name='Player 2' symbol='o' />

      </ol>
      GAME BOARD
      </div>
    </main>

  )
}

export default App
