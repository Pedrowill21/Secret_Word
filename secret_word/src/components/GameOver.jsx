import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <p>Fim da linha, amigo!</p>
        <button onClick={retry}>Jogar novamente ??</button>
    </div>
  )
}

export default GameOver