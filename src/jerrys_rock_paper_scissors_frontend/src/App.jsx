import "./App.css"
import { useState } from 'react';
import { jerrys_rock_paper_scissors_backend } from 'declarations/jerrys_rock_paper_scissors_backend';

function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   jerrys_rock_paper_scissors_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

 
   function clickRock(){
    jerrys_rock_paper_scissors_backend.userChoice(myChoice) 
    
  }
  return (
    // <main>
    //   <img src="/logo2.svg" alt="DFINITY logo" />
    //   <br />
    //   <br />
    //   <form action="#" onSubmit={handleSubmit}>
    //     <label htmlFor="name">Enter your name: &nbsp;</label>
    //     <input id="name" alt="Name" type="text" />
    //     <button type="submit">Click Me!</button>
    //   </form>
    //   <section id="greeting">{greeting}</section>
    // </main>

   
    
    // function clickPaper(){
      
    // }
    
    // function clickScissors(){
      
    // }

    <main className="main">
      <h1>Rock, Paper, Scissors</h1>
      <p>choose:</p>
      <div className='user-options'>
        <div onClick={handleClick()}>
          Rock
        </div>
        <div onClick={handleClick()}>
          Paper
        </div>
        <div onClick={handleClick()}>
          Scissors
        </div>
      </div>
    </main>
  );
}

export default App;
