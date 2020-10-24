import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = (props) => {
  return(
    <>
    <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>
      {props.part} {props.exercises}
    </p>
    </>
  )
}


const Footer = (props) => {
  return(
    <>
    <p>
      Total number of exercises: {props.ex1 + props.ex2 + props.ex3}
    </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header name={course} />

      <hr></hr>

      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />

      <hr></hr>

      <Footer ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))