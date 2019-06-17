
let maxHealth = 100;
let health = maxHealth;
let hits = 0;
let name = "The Plastics"
let targetHealth = document.getElementById("health")

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



// health damage count on attack click
function hairPull() {
  health -= 1;
  hits += 1; // **not working**
  targetHealth.innerText = health.toString();
}

function scratch() {
  health -= 5;
  hits += 1; // **not working**
  targetHealth.innerText = health.toString()
}

function boobPunch() {
  health -= 10;
  hits += 1; // **not working**
  targetHealth.innerText = health.toString();
}

// power up
function humpDayTreat() {
  health += 10
  targetHealth.innerText = health.toString();
}

// reset hit count to 0 and health to 100 ***NOT WORKING***
function reset() {
  health = 100;
  hits = 0;
  update();
}

// ***NOT UNDERSTANDING ITEM/MODIFIER REQUIREMENT***
//let items = {
//item: { name: '', modifier: 2, description: '' }
//item: { name: '', modifier: 4, description: '' }
//item: { name: '', modifier: 6, description: '' }
//}

update();