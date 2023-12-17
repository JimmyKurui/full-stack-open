import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = "Half Stack Development"
  const parts = [
    {
    name: "Fundamentals of React",
    exercise : 10
  },
  {
    name: "Using props to pass data",
    exercise : 7
  },
  {
    name: "State of a component",
    exercise : 14
  }
]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
