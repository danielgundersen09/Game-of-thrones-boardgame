
var theBoard = (function() {

  function rollDice() {
      return Math.floor(Math.random() * 6 + 1);
    }

    function clearPreviousPosition(position) {
      if (position > 0) {
        let clearToken = `.tile-${position}`;
        return document
          .querySelector(clearToken)
          .style.setProperty("--tokenColor", "transparent");
      }
    }

  


 
    //Traps (with rising difficulty)
    function aTrap(position) {
      switch (position) {
        
                  case 5:  //Soldier
                  position = 3;
        alert('A soldier stand in your way: Move back 2 spaces!')
                  break;
                  
                case 12: //Fire 
                 position = 9;
        alert('A fire is in the path, you must move around: Move back 3 spaces!');
                 break;
                
                case 15: //Ice dragon 
                  position = 11;
        alert('An ice dragon blocks path: Move back 4 spaces!');
                  break;
        
                case 20: //brown dragon
                  position = 16;
        alert('Brown dragon blocks path: Move back 4 spaces!');
                  break;
                
                case 28: //White walker
                  position = 21;
        alert('You ran into a White Walker: Move back 7 spaces!');
                  break;
       
       
      }
      return position;
    }

    function checkVictory(position, diceResult) {
      if (position + diceResult > 35) {
        position;
      } else {
        position = position + diceResult;
      }
      return position;
    }

    function getActivePlayer(diceResult, playerPosition) {
      let active = diceResult === 6 ? playerPosition : playerPosition % 2 + 1;
      let inactive = active % 2 + 1;
  
      return { active, inactive };
    }
  
    function removeInactiveDiceBtn(active, inactive) {
      const diceBtn1 = document.getElementById("disablebtn1");
      const diceBtn2 = document.getElementById("disablebtn2");
      if (active === 1) {
        diceBtn2.classList.add("disabled");
        diceBtn1.classList.remove("disabled");
      } else {
        diceBtn1.classList.add("disabled");
        diceBtn2.classList.remove("disabled");
      }
    }
  
  
    var player1Position = 0;
    
    function player1() {
     
      const diceResult = rollDice();
  
      clearPreviousPosition(player1Position);
     
      let { active, inactive } = getActivePlayer(diceResult, 1);
      removeInactiveDiceBtn(active, inactive);
  
      document.getElementById("dicedisplay").innerHTML = "Player 1 roll: " + diceResult;
  
      player1Position = checkVictory(player1Position, diceResult);
      player1Position = aTrap(player1Position);
  
      if (player1Position >= 30) {
        alert('player 1 won!');
        window.location.href = "endgame.html";
      } else {
        let getToken = `.tile-${player1Position}`;
        document
          .querySelector(getToken)
          .style.setProperty("--tokenColor", "white");
      }
    }
  
    
    var player2Position = 0;

    function player2() {
   
      const diceResult = rollDice();
  
      clearPreviousPosition(player2Position);
  
      let { active, inactive } = getActivePlayer(diceResult, 2);
      removeInactiveDiceBtn(active, inactive);
  
      document.getElementById("dicedisplay").innerHTML = "Player 2 roll: " + diceResult;
  
      player2Position = checkVictory(player2Position, diceResult);
      player2Position = aTrap(player2Position);
  
      if (player2Position >= 30) {
        alert("player 2 won!");
        window.location.href = "endgame.html";
      } else {
        let getToken = `.tile-${player2Position}`;
        document
          .querySelector(getToken)
          .style.setProperty("--tokenColor", "black");
      }
    }
  
    return { player1, player2  };
  })();
  



