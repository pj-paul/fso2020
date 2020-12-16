import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

const increareByOne = () => setCounter(counter+1)
const resetZero = () => setCounter(0)
const decreaseByOne = () => setCounter(counter-1)

const Display = ({counter}) => {
    return(
      <div>{counter}</div>
    )
}

const Button = (prop) => {
  return(
    <button onClick= {prop.handleClick}>
      {prop.text}
    </button>
  )
}

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increareByOne} text='Plus'/>
      <Button handleClick={resetZero} text='Reset'/>
      <Button handleClick={decreaseByOne} text='Minus'/>
    </div>

  )
}

// let counter = 1

// ReactDOM.render(
//   <App counter={counter} />, 
//   document.getElementById('root')
// )

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)