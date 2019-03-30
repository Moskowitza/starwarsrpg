// create characters each character has Health Points`, `Attack Power` and `Counter Attack Power`.
const characters = [
  {
    name: "yoda",
    age: 1000,
    healthPoints: 100,
    attackPower: 8,
    attackModifier: 8,
    counterAttack: 10,
    takeDamage(damage) {
      this.healthPoints =
        this.healthPoints - (Math.floor(Math.random() * 20) + damage);
    },
    powerUp() {
      this.attackPower = this.attackPower + this.attackModifier;
    },
  },
  {
    name: "luke",
    age: 40,
    healthPoints: 95,
    attackPower: 7,
    attackModifier: 7,
    counterAttack: 10,
    takeDamage(damage) {
      this.healthPoints =
        this.healthPoints - (Math.floor(Math.random() * 20) + damage);
    },
    powerUp() {
      this.attackPower = this.attackPower + this.attackModifier;
    },
  },
  {
    name: "chewie",
    age: 100,
    healthPoints: 80,
    attackPower: 6,
    attackModifier: 6,
    counterAttack: 11,
    takeDamage(damage) {
      this.healthPoints =
        this.healthPoints - (Math.floor(Math.random() * 20) + damage);
    },
    powerUp() {
      this.attackPower = this.attackPower + this.attackModifier;
    },
  },
  {
    name: "leia",
    age: 40,
    healthPoints: 90,
    attackPower: 6,
    attackModifier: 6,
    counterAttack: 11,
    takeDamage(damage) {
      this.healthPoints =
        this.healthPoints - (Math.floor(Math.random() * 20) + damage);
    },
    powerUp() {
      this.attackPower = this.attackPower + this.attackModifier;
    },
  },
];

// Select our Dom Elements
const charactersDiv = document.getElementById("characters");
const heroDiv = document.getElementById("hero");
const defenderDiv = document.getElementById("defender");
const attackBtn = document.getElementById("attack");
// the HTML cards
let heroNode;
let defenderNode;
// the objects we're moving to play area
let hero;
let defender;
// todo create a score system
// Score
// const wins;
// const losses;

let remainingCharacters = [...characters];
// Select hero and defender
function select(e) {
  const selectedName = e.target.parentNode.id;
  if (!hero) {
    // if no hero, make one
    hero = characters.find(character => character.name === selectedName);
    remainingCharacters = remainingCharacters.filter(char => char !== hero);
  } else if (!defender) {
    // if there is a hero but no defender..
    defender = characters.find(character => character.name === selectedName);
    console.log(defender);
    remainingCharacters = remainingCharacters.filter(char => char !== defender);
  }
  if (!heroNode) {
    // 1) if no heroNode, get it from charactersDiv
    heroNode = document.getElementById(selectedName);
    heroNode.setAttribute("class", "active");
    // 2) remove it from the charactersDiv
    charactersDiv.removeChild(heroNode);
    // 3) And place it in the heroDiv
    heroDiv.append(heroNode);
  } else if (!defenderNode) {
    // Repeat Pattern for defender
    defenderNode = document.getElementById(selectedName);
    defenderNode.setAttribute("class", "active");
    charactersDiv.removeChild(defenderNode);
    defenderDiv.append(defenderNode);
  }
}
function createCard(character) {
  const charCard = document.createElement("DIV");
  charCard.setAttribute("id", character.name);
  charCard.setAttribute("class", "character");
  charCard.innerHTML = `
        <img src="assets/images/${character.name}.jpg">
        <div class="info">
        <p class="charName">${character.name}</p>
        <p class="healthPoints attribute">Health: ${
          character.healthPoints
        }pts.</p>
        <p class="attackPower attribute">Attack Power: ${
          character.attackPower
        }pts.</p>
        <p class="counterAttack attribute">Counter Attack: ${
          character.counterAttack
        }pts.</p>
        </div>
      `;
  charCard.addEventListener("click", select, false);
  if (defenderNode) {
    // keep adding active class back
    charCard.setAttribute("class", "active");
  }
  return charCard;
}
function loadCharacters() {
  characters.forEach(character => {
    charactersDiv.appendChild(createCard(character));
  });
}
loadCharacters();
function updateBattleField() {
  heroDiv.innerHTML = "";
  heroDiv.appendChild(createCard(hero));
  defenderDiv.innerHTML = "";
  defenderDiv.appendChild(createCard(defender));
}
function battle() {
  // Assign new damage to each fighter
  hero.takeDamage(defender.counterAttack);
  defender.takeDamage(hero.attackPower);
  hero.powerUp();
  // WE need to update the DOM, empty the divs and reappend..IF game isn't over
  if (hero.healthPoints >= 0 && defender.healthPoints >= 0) {
    updateBattleField();
    // heroDiv.innerHTML = '';
    // heroDiv.appendChild(createCard(hero));
    // defenderDiv.innerHTML = '';
    // defenderDiv.appendChild(createCard(defender));
  } else if (hero.healthPoints < 0) {
    // show losing Modal
    alert(
      `you lose, rebel scum! ${hero.name} has ${
        hero.healthPoints
      } health remaining`
      // todo RESET
    );
  } else if (defender.healthPoints < 0) {
    if (remainingCharacters.length > 0) {
      alert(
        `Yeahoooo ${defender.name} has been defeted. Who will you fight next?`
      );
      defenderDiv.innerHTML = "";
      defenderDiv.innerHTML = `<h2>Pick your next Defender</h2>`;
      defender = null;
      defenderNode = null;
    } else {
      // show winning modal
      alert(`${defender.name} has been defeted. You are the champion`);
      // Reset
    }
    // Pick New Defender resets game
  }
}

// FIGHT!
attackBtn.addEventListener("click", battle);
