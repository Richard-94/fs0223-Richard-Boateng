function casualNumber(firstPlayer:number,secondPlayer:number){
  let random = Math.floor((Math.random()*100)+1)

  
  if (random===firstPlayer) {
    return ("the generated number is " + random +  " the number of " + firstPlayer + " is equal")
  }

  else if(random === secondPlayer){
    return ("the generated number is " + random +  " the number " + secondPlayer + " is equal to " + random)
  }

  else if(random <= firstPlayer){
    return (random +" was generated " + firstPlayer + " was near")
  }

  else {
    return(random +" was generated " + secondPlayer + " was near")
  }
  
  
}

console.log(casualNumber(9,10));


// function casualNumber(firstPlayer:number,secondPlayer:number){
//     let random = Math.floor((Math.random()*100)+1)
  
//     const diffFirstPlayer = Math.abs(random - firstPlayer);
//     const diffSecondPlayer = Math.abs(random - secondPlayer);
  
//     if (diffFirstPlayer<diffSecondPlayer) {
//       return ("the generated number is " + random +  " the number of " + firstPlayer + " was near")
//     }
  
//     else if(diffSecondPlayer<diffFirstPlayer){
//       return ("the generated number is " + random +  " the number " + secondPlayer + " was near ")
//     }
  
//     else{
//       return random
//     }
    
//   }
  
//   console.log(casualNumber(50,40));
  