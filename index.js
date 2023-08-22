function scuberGreetingForFeet(ride){
  // Write your code here!

return ride <= 400 ? 'This one is on me!' : ride <= 2000? 'That will be twenty bucks.' : ride <= 2500 ? 'I will gladly take your thirty bucks.' : 'No can do.'
 
/*
LO MISMO QUE: 

if ( ride <= 400) {
  return 'This one is on me!'
}
else if (ride <= 2000)  {
  return 'That will be twenty bucks.'
}
else if (ride <= 2500)  {
  return 'I will gladly take your thirty bucks.'
}
else {
 return 'No can do.'
}
*/

}

function ternaryCheckCity(city){
  // Write your code here!

  return city === "NYC" ? 'Ok, sounds good.' : "No go."

}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case "generous":
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case "thanks for everything":
      return "Bye.";
    default:
      return "Thank you!";
  }
}