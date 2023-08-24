



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
       <h3 className="tip">Dica sobre a palavra: <span>{pickedCategory}</span></h3>
       <div className="wordContainer">

        {
          letters.map((letter,i)=>(
            guessedLetters.includes(letter) ? ( 
              <span className="letter" key={i}>{letter}</span>
            ) : (
              <span className="blankSquare" key={i}></span>
            ))
          )
        }
      
      
       </div>
       <div className="letterContainer">
        <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar!</button>
        </form>
       </div>
       <div className="wrongLettersContainer">
        {wrongLetters.map((letter,i)=>(
          <span>{letter}</span>
        ))}
       </div>
    </div>
  )
}

export default Game