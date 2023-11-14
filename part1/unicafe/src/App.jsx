import { useState } from "react";

//Button Component
const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

//StatisticLine Component
const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const totalFeedback = good + neutral + bad;
  const goodPercentage = (good / totalFeedback) * 100 || 0;
  const averagePercentage =
    (good * 1 + neutral * 0 + bad * -1) / totalFeedback || 0;
  // <StatisticLine
  //   text="average"
  //   value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / sum}
  // />;

  console.log(goodPercentage, totalFeedback, averagePercentage);
  // Conditional Renderer
  if (totalFeedback === 0) {
    return (
      <>
        <h1>No Feedback given</h1>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good: " value={good} />
          <StatisticLine text="neutral: " value={neutral} />
          <StatisticLine text="bad: " value={bad} />
          <StatisticLine text="all: " value={totalFeedback} />
          <StatisticLine text="average: " value={averagePercentage} />
          <StatisticLine text="positive: " value={goodPercentage} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give FeedBack</h1>
      {/* Button click counter */}
      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />

      {/* Statistics */}
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
