
let health = 100;
let hits = 0;
let name = "The Plastics"
let targetHealth = document.getElementById("health")
let hitCount = document.getElementById("hits")
let charItems = []

// individual targets
// let meanGirl = {
// name: "Regina George",
// moods: [{
//    mood: "What are you looking at?"
//    image: ""
//  },
//  {
//    mood: "Annoyed",
//    image: ""
//  },
//  {
//    mood: "Injured",
//    image: ""
//  }
//}],

function update() {
  // conditionals here to check if health is below 0 or greater than 100
  targetHealth.innerText = health.toString();
  hitCount.innerText = hits.toString();
}

// health damage count on attack click
function hairPull() {
  health -= 1 + addMods()
  hits += 1;
  update()
}

function scratch() {
  health -= 5 + addMods()
  hits += 1;
  update()
}

function boobPunch() {
  health -= 10 + addMods()
  hits += 1;
  update();
}

// power up
function humpDayTreat() {
  health += 10
  update();
}

// reset hit count to 0 and health to 100
function reset() {
  health = 100;
  hits = 0;
  update();
}

let items = {
  proteinBar: { name: 'Kälteen Protein Bar', modifier: 2, description: 'Tasty, but makes target gain weight quickly.' },
  hairspray: { name: 'Hairspray In Eyes', modifier: 4, description: 'It burns!' },
  purse: { name: 'Purse Thwap', modifier: 6, description: 'Makes target see stars.' }
}

function addItem(itemName) {
  // add the item from the items dictionary above with the itemName to the charItems array
  charItems.push(items[itemName])
}

// **DOES NOT WORK**
function addMods() {
  // create a modifierTotal variable set to 0
  let modifierTotal = 0;
  // loop over the charItems array and for each element in the array
  for (let i = 0; i < charItems.length; i++) {
    let item = charItems[i]
    modifierTotal += item.modifier

  }
  // add the modifier value of the item to the modifierTotal variable
  //return the modifierTotal
  return modifierTotal
}


// update();