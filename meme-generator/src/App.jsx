import {useState} from 'react'
import './index.css'
import Header from './components/Header'
import Meme from './components/Meme'
import memeData from './memeData'
import Practice from './components/Practice'
import Star from './components/Star'
import Joke from './components/Joke'
import Form from './components/Form'
import jokesData from './jokesData'
import Api from './components/API'
import WindowTracker from './components/WindowTracker'

function App() {

  const data = jokesData.map(joke => {
    return <Joke key={joke.id} joke={joke.joke} punchline={joke.punchline}/>
  })

  const [user, setUser] = useState('Luchi')

  return (
    <div className="App">
      <Header/>
      {/* <Meme/> */}
      <div className="black">
      {/* <Api/> */}
        {/* <Practice /> */}
      {/* <Joke /> */}
      {/* <Form /> */}
      {/* {data} */}
      <WindowTracker/>
      </div>
    </div>
  ) 
}

export default App
