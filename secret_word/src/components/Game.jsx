



import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div>
        <h1>game</h1>
        <button onClick={verifyLetter}>Começar a Jogar!</button>
    </div>
  )
}

export default Game