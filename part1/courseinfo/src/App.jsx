import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = "Half Stack Development"
  const part1 = {
    name: "Fundamentals of React",
    exercise : 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercise : 7
  }
  const part3 = {
    name: "State of a component",
    exercise : 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
