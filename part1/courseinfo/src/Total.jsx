const Total = (props) => {
  return (
    <>
      {/* <p>Number of exercises is {props.exercises.reduce((a,b)=> a+b)}</p> */}
      <p>Number of exercises is {
      props.part1.exercise +
      props.part2.exercise +
      props.part3.exercise 
      }
      </p>
    </>
  )
}

export default Total