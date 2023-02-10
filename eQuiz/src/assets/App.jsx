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
          id: nanoid(8),
          question: eachQuestion.question.replace(/&[#A-Za-z0-9]+;/gi, ""),
          incorrect_answers: [
            ...eachQuestion.incorrect_answers,
            eachQuestion.correct_answer
          ]
      }
    })))
  }, [])


  let triviaElement = trivia.map(eachQuestion => 
    // let test = add variable to map and add to question so they're separate instead of an array (GuessWork)
    {return <Questions 
        key={eachQuestion.id}
        question={eachQuestion.question}

        // answers={eachQuestion.incorrect_answers.map(eachAnswer =>{
        //   return eachAnswer
        // })}
      />
    })

  return (
    <div className="App">
      {triviaElement}
    </div>
  )
}

export default App


// from the api i need,
// incorrect answers, correct answers , questions 

// loop through the data given back from the api and log them into a component {Questions}
// passing in props like question and answers