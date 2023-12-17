const Total = (props) => {
  return (
    <>
      <p>Number of exercises is {props.parts.map(a => a.exercise).reduce((a,b) => a+b)}
      </p>
    </>
  )
}

export default Total