const Header = ({ course }) => <h2>{course}</h2>
const Total = ({ parts }) => {
  const sum = parts.map(x => x.exercises).reduce((a,b) => a+b)
  return <p><strong>total of {sum} exercises</strong></p>
}
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => parts.map(el => <Part key={el.id} part={el} /> )

const Course = ({course}) => 
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

export default Course