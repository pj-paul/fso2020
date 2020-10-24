import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () =>
  {
    return(
      <div>
        <p>Hello World</p>
      </div>
    )
  }

const HelloProp =  (props) =>
{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} old.</p>
    </div>
  )
}

const App = () => 
  {
    const now = new Date()
    const a   = 10
    const b   = 20

    return(
      <>
        <h1>Greetings</h1>
        <Hello />
        <Hello/>

        <p>Hello world, it is {now.toString()}</p>

        <HelloProp name="PJP" age={10} />

        <HelloProp name="ABC" age={a + 10} />
      </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))