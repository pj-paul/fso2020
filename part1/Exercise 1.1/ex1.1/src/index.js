import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = ({prop}) => {
  return(
    <>
    <h1>{prop.name}</h1>
    </>
  )
}

const Content = ({prop}) => {
  var Paras = prop.parts.map(part =>{
    return(<p>{part.name} {part.exercises}</p>)
  })
  return(
    <>
    {Paras}
    </>
  )
}


const Footer = ({prop}) => {
  let total = 0
  prop.parts.forEach(part => total += part.exercises)
  console.log(total)
  return(
    <>
    <p>
      Total number of exercises: {total}
    </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return(
    <div>
      <Header prop={course} />

      <hr></hr>

      <Content prop={course} />

      <hr></hr>

      <Footer prop={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))