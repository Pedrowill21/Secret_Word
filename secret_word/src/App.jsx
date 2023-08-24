import { useState, useEffect, useCallback } from 'react'
import {wordsList} from "./data/words"


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words, setWord] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("") 
  const [letters,setLetters] = useState([]) 

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


const qtdGuess = 3


  const pickedWordAndCategory = useCallback(()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length )]

    return {category, word}
  }, [words])

  const startGame = useCallback(()=>{

    const {word, category} = pickedWordAndCategory()
 
     let wordLetters = word.split("")
 
     wordLetters = wordLetters.map((l)=>l.toLowerCase())
 
     console.log(word,category, wordLetters)
     setPickedWord(word)
     setPickedCategory(category)
     setLetters(wordLetters)

     console.log("ta passando aqui ?")
 
     setGameStage(stages[1].name)
   },[pickedCategory])

  const verifyLetter = (letter) =>{
    const normalizeLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizeLetter) ||wrongLetters.includes(normalizeLetter) ){
      return;
    }

    if(letters.includes(normalizeLetter)){
      setGuessedLetters((actualGuessedLetters)=>[...actualGuessedLetters,normalizeLetter])
    } else{
      setWrongLetters((actualWrongLetters)=>[...actualWrongLetters,normalizeLetter])
      setGuesses((actualGuesses)=> actualGuesses  - 1)
    }
  }

  const clearLettersStates = ()=>{
    setGuessedLetters([])
    setWrongLetters([])
  }
  
  useEffect(()=>{
    if(guesses <= 0){

      clearLettersStates()


      setGameStage(stages[2].name)

    }
  },[guesses, letters, startGame])

  const retry = () =>{
    setScore(0)
    setGuesses(qtdGuess)

    setGameStage(stages[0].name)
  }


  return (
        <div className="app">
          {gameStage === "start" && <StartScreen startGame={startGame}/>}
          {gameStage === "game" && <Game
           verifyLetter={verifyLetter} 
           pickedWord={pickedWord}
            pickedCategory={pickedCategory} 
            letters={letters} 
            guessedLetters={guessedLetters}
            wrongLetters ={wrongLetters}
            guesses={guesses}
            score={score}  
            />}
          {gameStage === "end" && <GameOver retry={retry}/>}
          


        </div>
  )
}

export default App
