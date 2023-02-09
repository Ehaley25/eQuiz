import { useEffect } from 'react'
import { useState } from 'react'
import Questions from './components/Questions'

function App() {
  const [trivia , setTrivia] = useState([])


  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => setTrivia(data.results))
  }, [])

  console.log(trivia)
  return (
    <div className="App">
      <Questions test = 'elijah' />
      <Questions test = 'elijah'/>
      <Questions test = 'elijah'/>
      <Questions test = 'elijah'/>
      <Questions test = 'elijah'/>
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