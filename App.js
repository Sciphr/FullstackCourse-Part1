import React from 'react'

// Header component to read out the header info passed by App using props.course
const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

// Content passed 3 times by App with different data sent each time it is called using props.part1(2)(3) and props.exercises1(2)(3)
const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

// Number of exercises all passed as 3 separate props from App, and calculated as a total and printed out 
const Total = (props) => {
  const allExercises = props.exercises1+props.exercises2+props.exercises3
  return (
    <>
      <p>
        Number of exercises {allExercises}
      </p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <Content part={props.part} exercises={props.exercises}/>
    </>
  )
}

// Main App sending all information to corresponding components
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App