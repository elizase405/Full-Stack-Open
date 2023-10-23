import { useState } from 'react'

const Button = ({ handleClick, text }) =>
    <div style={buttonCss}>
        <button  onClick={handleClick}>{text}</button>
    </div>

const StatisticsLine = ({ total, text, per }) =>
    <div>
        <td>{text}</td>
        <td>{total}</td>
        <td>{per}</td>
    </div>

const Statistics = ({ value, text, per}) => {
    return (
        <tr>
            <StatisticsLine text={text} total={value} per={per}/>
        </tr>
    )
}



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

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(null)

  const isgood = () => setGood(good + 1)
  const isneutral = () => setNeutral(neutral + 1)
  const isbad = () => setBad(bad + 1)
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={isgood} text="good" />
      <Button handleClick={isneutral} text="neutral" />
      <Button handleClick={isbad} text="bad" />
      <h1>statistics</h1>
      {
            good === 0 && bad === 0 && neutral === 0
        ?
            <p>No feedback given</p>
        :
            <table>
                <Statistics text="good" value={good}/>
                <Statistics text="neutral" value={neutral}/>
                <Statistics text="bad" value={bad}/>
                <Statistics text="all" value={good + neutral + bad} />
                <Statistics text="average" value={(good + neutral + bad) / 3} />
                <Statistics text="positive" value={good / (good + neutral + bad) * 100} per="%"/>
            </table>
      }
      <p>{anecdotes[selected]}</p>
      <Button handleClick={nextAnecdote} text="next anecdote" />
    </div>
  )
}


const buttonCss = {
    display: "inline-block"
}
export default App