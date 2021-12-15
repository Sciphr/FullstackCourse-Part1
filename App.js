import React from 'react'

// Header component to read out the header info passed by App using props.course
const Header = (props) => {
  return (
    <>
      <h1>
        {props.course.name}
      </h1>
    </>
  )
}

// Content passed 3 times by App with different data sent each time it is called using props.part1(2)(3) and props.exercises1(2)(3)
const Content = (props) => {
  //For readability, make array to avoid using props. all the time
  const partsArray = props.course.parts

  let nameArray = []
  let exercisesArray = []
  let counter = 0
  let finalArray = []

  partsArray.forEach (value =>{
    nameArray[counter] = value.name
    counter++
  })

  counter = 0

  partsArray.forEach (value =>{
    exercisesArray[counter] = value.exercises
    counter++
  })

  let length = nameArray.length

  for (var i = 0; i < length; i++) {
    finalArray.push (<p> {nameArray[i]} {exercisesArray[i]} </p>)
  }

  return (
        <>
          {finalArray}
        </>
  )
}

// Number of exercises all passed as 3 separate props from App, and calculated as a total and printed out 
const Total = (props) => {
  const courseArray = props.course.parts
  let total = 0;

  courseArray.forEach (value=> {
    total = total + value.exercises
  })

  return (
    <>
      <p>
        Number of exercises {total}
      </p>
    </>
  )
}


// Main App sending all information to corresponding components
const App = () => {
  const course = {
    name: 'Half Stack application development',
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

  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App