function scuberGreetingForFeet(value){
  // Write your code here!
  let ride
  if(value <=400){
    ride = 'This one is on me!'
  } else if (value <=2500) {
    ride = 'I will gladly take your thirty bucks.'
  } else {
    ride = 'No can do.'
  }
  return ride
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  // Write your code here!
  let results
  if (city === 'NYC') {
    results = "Ok, sounds good."
    
  } else {
    results = 'No go.'
    
  }
  return results
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  // Write your code here!
 switch (tip) {
  case 'generous':
    return "Thank you so much."
    
    break;
    case 'not as generous':
    return 'Thank you.'
 
  default:
    case 'thanks for everything':
    return 'Bye.'
 }
}