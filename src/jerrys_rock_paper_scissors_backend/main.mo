// actor {
//   public query func greet(name : Text) : async Text {
//     return "Hello, " # name # "!";
//   };
// };

import Random "mo:base/Random";

actor rockPaper{

  //enhums of the 3 different choices
  type choice = {
    #Rock;
    #Paper;
    #Scissors;
  };

  //enhums of the 3 different oucomes

  type outcome = {
    #Win : Text;
    #Lose : Text;
    #Draw : Text;
  };

  func computerChoice() : async choice{

    let random = Random.Finite(await Random.blob());
    let computerChoice = random.range(2);

    switch(computerChoice){
    case (?0) return #Paper;
    case (?1) return #Rock;
    case (?2) return #Scissors;
    case (null) return #Rock};
    
  };
  public  func userChoice( myChoice:choice) : async ( Text, outcome) {
    //
    
    switch(myChoice, await computerChoice()) {
 
      case (#Rock, #Rock) { return ("Rock 🆚 Rock", #Draw  "SO CLOSE, Try again be 🤝");};
      case (#Rock,  #Paper) { return ("Rock 🆚 Paper", #Lose "YOU LOST, Try harder, you only fail when you give up 💪");};
      case (#Rock, #Scissors) {return  ("Rock 🆚 Scissors", #Win  "YOU WIN, Congratulations, you're amazing 🏆"); };

      case (#Paper, #Rock) {return ("Paper 🆚 Rock",#Win  "YOU WIN, Congratulations, you're amazing 🏆" );};
      case (#Paper, #Paper) { return ("Paper 🆚 Paper", #Draw "SO CLOSE, Try again 🤝");};
      case (#Paper, #Scissors) { return ("Paper 🆚 Scissors",#Lose "YOU LOST, Try harder, you only fail when you give up 💪");};

      case (#Scissors, #Rock) { return ("Scissors 🆚 Rock",#Lose "YOU LOST, Try harder, you only fail when you give up 💪");};
      case (#Scissors, #Paper) { return ("Scissors 🆚 Paper", #Win  "YOU WIN, Congratulations, you're amazing 🏆"); };
      case (#Scissors, #Scissors) { return ("Scissors 🆚 Scissors", #Draw "SO CLOSE, Try again 🤝");};
    };
  };
};