import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdote = () => setSelected( Math.floor(Math.random() * anecdotes.length) )
  const handleVote = () => setVotes(votes.map((x, i) => i===selected ? ++x : x ))

  return (
    <>
      <Heading title="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} Votes</div>
      <Button handleClick={handleAnecdote} text="next anecdote" />
      <Button handleClick={handleVote} text="vote" />
      <Heading title="Anecdote with most votes" />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const MostVoted = ({anecdotes, votes}) => {
  const highest = votes.reduce((iMax, x, i, arr) => x > arr[iMax]? i: iMax, 0)
  return (
    <>
      <div>{anecdotes[highest]}</div>
      <div>has {votes[highest]} Votes</div>
    </>
  )
}
const Heading = ({title}) => <h1>{title}</h1>

export default App