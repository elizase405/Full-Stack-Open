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
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isgood = () => setGood(good + 1)
  const isneutral = () => setNeutral(neutral + 1)
  const isbad = () => setBad(bad + 1)

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
    </div>
  )
}


const buttonCss = {
    display: "inline-block"
}
export default App