
let health = 100;
let hits = 0;
let safe = 0;
let targetHealth = document.getElementById("health")



let meanGirl = {
  name: "Regina George",
  moods: [{
    mood: "What are you looking at?"
    image: ""
  },
  {
    mood: "Annoyed",
    image: ""
  },
  {
    mood: "Injured",
    image: ""
  }
}],



function hairPull() {
  health -= 1
  targetHealth.innerText = health.toString()
}

function scratch() {
  health -= 5
  targetHealth.innerText = health.toString()
}

function boobPunch() {
  health -= 10
  targetHealth.innerText = health.toString()
}

function humpDayTreat() {
  health += 20
  targetHealth.innerText = health.toString()
}




// let hitDamage = {
//   this.name = name;
//   this.damage = damage;
// }

// let hitDamages = {
//   hairPull: new hitDamage("hair-pull", -= 1);
//   scratch: new hitDamage("scratch", -= 5);
//   boobPunch: new hitDamage("boob-punch", -= 10)
// }