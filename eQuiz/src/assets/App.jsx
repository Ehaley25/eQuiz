import { useState } from 'react'
import Questions from './components/Questions'

function App() {
  const [trivia , setTrivia] = useState('test')

  fetch('https://opentdb.com/api.php?amount=5&type=multiple')
  .then(res => res.json())
  .then( data => console.log(data.results))

  return (
    <div className="App">
      <Questions test = 'elijah' />
      <Questions test = 'test'/>
      <Questions test = 'loser'/>
      <Questions test = 'boss'/>
      <Questions test = 'ye'/>
    </div>
  )
}

export default App


// from the api i need,
// incorrect answers, correct answers , questions 

// loop through the data given back from the api and log them into a component {Questions}
// passing in props like question and answers

// data.results is an array of objects
// 