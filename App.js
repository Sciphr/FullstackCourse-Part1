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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
        <Part part={part1.name} exercises={part1.exercises}/>
        <Part part={part2.name} exercises={part2.exercises}/>
        <Part part={part3.name} exercises={part2.exercises}/>
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

export default App