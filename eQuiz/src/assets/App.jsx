import { useEffect } from 'react'
import { useState } from 'react'
import Questions from './components/Questions'
import { nanoid } from 'nanoid'
function App() {
  const [trivia , setTrivia] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
    .then(res => res.json())
    .then(data => setTrivia(data.results.map(eachQuestion =>{
      return{
        ...eachQuestion,
          // id: nanoid(8),
          question: eachQuestion.question.replace(/&[#A-Za-z0-9]+;/gi, ""),
          incorrect_answers: [
            ...eachQuestion.incorrect_answers,
            eachQuestion.correct_answer
          ]
      }
    })))
  }, [])


  let triviaElement = trivia.map(eachQuestion => {
    let answers = eachQuestion.incorrect_answers.map(answer =>{
      return <button key={nanoid(9)}>{answer}</button>
    })
    let questions = eachQuestion.question
    return <Questions 
    key = {nanoid(9)}
    questions = {questions}
    answers = {answers}
    /> 
  })

  // let triviaElement = trivia.map(eachQuestion => {
  //     console.log(eachQuestion.question)
  //   })


  return (
    <div className="App">
      {triviaElement}
    </div>
  )
}

export default App

// add variable to map and add to question so they're separate instead of an array (GuessWork)
// from the api i need,
// incorrect answers, correct answers , questions 

// loop through the data given back from the api and log them into a component {Questions}
// passing in props like question and answers