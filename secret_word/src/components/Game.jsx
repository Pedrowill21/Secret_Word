



import "./Game.css"

const Game = ({
            verifyLetterm,
            pickedWord,
            pickedCategory, 
            letters, 
            guessedLetters,
            wrongLetters,
            guesses,
            score,
}) => {
  return (
    <div className="game">
       <p className="points">
        <span>Pontuação : {score}</span>
       </p>
       <h1>Adivinhe a palavra:</h1>
       <h3>Dica sobre a palavra: <span>Dica...</span></h3>
       <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
       </div>
       <div className="letterContainer">
        <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar!</button>
        </form>
       </div>
       <div className="wrongLettersContainer">
        <p>Letras já utilizadas: {wrongLetters}</p>
       </div>
    </div>
  )
}

export default Game