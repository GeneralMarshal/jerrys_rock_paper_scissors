import './App.css';
import { useState } from 'react';
import { jerrys_rock_paper_scissors_backend } from 'declarations/jerrys_rock_paper_scissors_backend';

function App() {
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [clicked, setClicked] = useState("")

  function handleClick(choice, event) {
    setResult("...loading")
    setMessage("...loading")

    jerrys_rock_paper_scissors_backend.userChoice(choice).then(([text, outcome]) => {
      setResult(text);
      setMessage(parseOutcome(outcome));
    }).catch(err => console.log(err));

    event.currentTarget.classList.add('clicked');
    console.log(event.currentTarget.classList)
  }

  function parseOutcome(outcome) {
    console.log(outcome)
    if ('Win' in outcome) {
      return outcome.Win;
    } else if ('Lose' in outcome) {
      return outcome.Lose;
    } else if ('Draw' in outcome) {
      return outcome.Draw;
    } else {
      return 'Unexpected outcome';
    }
  }

  return (
    <main className="main">
      <h1>Rock, Paper, Scissors</h1>
      <p>Choose:</p>
      <div className='user-options'>
        <button onClick={(e) => handleClick({ Rock: null },e)}>
          Rock
        </button>
        <button onClick={(e) => handleClick({ Paper: null },e)}>
          Paper
        </button>
        <button onClick={(e) => handleClick({ Scissors: null },e)}>
          Scissors
        </button>
      </div>
      <p>Result: {result}</p>
      <p>Message: {message}</p>
    </main>
  );
}

export default App;
