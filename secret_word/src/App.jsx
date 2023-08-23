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

  const pickedWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length )]

    return {word, category}
  }

  const startGame = ()=>{

   const {word, category} = pickedWordAndCategory()

    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l)=>l.toLowerCase())

    setWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  const retry = () =>{
    setGameStage(stages[0].name)
  }


  return (
        <div className="app">
          {gameStage === "start" && <StartScreen startGame={startGame}/>}
          {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
          {gameStage === "end" && <GameOver retry={retry}/>}
          


        </div>
  )
}

export default App
