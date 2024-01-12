import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [allQuotes, setAllQuotes] = useState([])

  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  useEffect(() => {fetch(url)
  .then(response => response.json())
  .then(data => setAllQuotes(data.quotes))
  .catch(error => console.error("Errore...", error))},[])
  console.log(allQuotes)

  const [quotes, setQuotes] = useState({
    quote: "",
    author: ""
  })
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * allQuotes.length)
    setQuotes({
      quote: allQuotes[randomNumber]?.quote,
      author: allQuotes[randomNumber]?.author
    }
  )},[allQuotes])

  
  

  function randomizeQuote() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    console.log(randomNumber)
    console.log(allQuotes[randomNumber])
    setQuotes(prevState => ({
      quote: allQuotes[randomNumber].quote,
      author: allQuotes[randomNumber].author
    }))
  }

  return (
    <>
      <div id="quote-box">
        <div id="text">{quotes.quote}</div>
        <div id="author">{quotes.author}</div>
        <button id="new-quote" onClick={randomizeQuote}>New-quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Twittami</a>
        </div>
    </>
  )
}

export default App
