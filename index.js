function scuberGreetingForFeet(result){
  // Write your code here!
  if (result <= 400) {
    return 'This one is on me!'
  }else if(result > 400 && result <= 2000) {
    return 'That will be twenty bucks.'
  }else if(result > 2000 && result <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else if(result > 2500){
    return 'No can do.'
  }
}
scuberGreetingForFeet()

function ternaryCheckCity(city){
  // Write your code here!
  return city ===  'NYC' ? 'Ok, sounds good.' : 'No go.'
}
ternaryCheckCity()

function switchOnCharmFromTip(response){
  // Write your code here!
  switch (response) {
    case "generous":
      return "Thank you so much."
      break
    case "not as generous":  
       return "Thank you."
       break
    case "thanks for everything":
      return "Bye."  
      break 
  }
}
switchOnCharmFromTip()

