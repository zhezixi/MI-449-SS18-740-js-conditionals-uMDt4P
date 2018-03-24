
var lucky = window.prompt('Achelous: Hey young man! I heard your girlfriend just missing in the river. I am the god of this river. I heard your pray and here to help. Were you lost a sliver grilfriend or a gold one?') || ''
lucky = lucky.toLowerCase().trim()
// If the user clicks"Cancel" in the prompt
if (lucky === null) {
  var randomNumber = Math.random()
  if (randomNumber > 0.4) {
    window.alert('Achelous: You are a really honest person! As a reward, you will have your girlfriend, silver girlfriend and gold girlfriend !')
  } else {
    window.alert('single dog, single dog, single all the way~~')
  }
// If the user insert gold or sliver in the prompt
} else if (lucky === 'gold' || lucky === 'sliver') {
  window.alert('Achelous: You are a dishonest and greedy person, you will not have grilfriend anymore!')
  var howMany = window.prompt('Achelous: Just the last question, how many cats do you have?')
  howMany = parseInt(howMany)
  // If the user insert 0
  if (howMany === 0) {
    window.alert('Achelous: You do not have any cat, and you do not have girlfriend anymore ? That is terrible! lol ')
  // If the user insert 1 or more.
  } else if (howMany >= 1) {
    window.alert('Achelous: That is great! If you have cats, have girlfriend or not would not be matter! ')
  // If the user clicks"Cancel" in the prompt
  } else {
    window.alert('Achelous: Do not aviod this question! Ah! maybe you have a typo:)')
  }
} else {
  window.alert('Achelous: We do not have any"' + lucky + '" girlfriend - only sliver or gold:(')
  var likeOrNot = window.confirm('Do you like this game?')
  if (likeOrNot) {
    window.alert('Thank you for playing!')
  } else {
    window.alert('Ok, but we will not change anything! LoL!')
  }
}
