// create characters each character has Health Points`, `Attack Power` and `Counter Attack Power`.
const characters = [
  {
    name: 'yoda',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
    takeDamage() {
      this.healthPoints =
        this.healthPoints - Math.floor(Math.random() * 50) + 1;
    },
  },
  {
    name: 'luke',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
    takeDamage() {
      this.healthPoints =
        this.healthPoints - Math.floor(Math.random() * 50) + 1;
    },
  },
  {
    name: 'chewie',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
    takeDamage() {
      this.healthPoints =
        this.healthPoints - Math.floor(Math.random() * 50) + 1;
    },
  },
];

// 1 add heros to characters div
const charactersDiv = document.getElementById('characters');
const heroDiv = document.getElementById('hero');
const defenderDiv = document.getElementById('defender');
const attackBtn = document.getElementById('attack');
// Loop through the characters and add them to CharactersDiv
let heroNode; // the player HTML card
let defenderNode;
let hero; // the hero object
let defender;
let remainingCharacters = characters;
function select(e) {
  const selectedName = e.target.parentNode.id;
  // console.log(selectedName);
  if (!hero) {
    // if no hero, make one
    hero = characters.find(character => character.name === selectedName);
    console.log(hero);
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
    // 2) remove it from the charactersDiv
    charactersDiv.removeChild(heroNode);
    // 3) And place it in the heroDiv
    heroDiv.append(heroNode);
  } else if (!defenderNode) {
    // Repeat Pattern for defender
    defenderNode = document.getElementById(selectedName);
    charactersDiv.removeChild(defenderNode);
    defenderDiv.append(defenderNode);
  }
}
function createCard(character) {
  const charCard = document.createElement('DIV');
  charCard.setAttribute('id', character.name);
  charCard.setAttribute('class', 'character');
  charCard.innerHTML = `
        <img src="assets/images/${character.name}.jpg">
        <p>${character.name}</p>
        <p>HP ${character.healthPoints}</p>
      `;
  charCard.addEventListener('click', select, false);
  return charCard;
}

characters.forEach(character => {
  charactersDiv.appendChild(createCard(character));
});

function battle() {
  // Assign new damage to each fighter
  hero.takeDamage();
  defender.takeDamage();
  // WE need to update the DOM, empty the divs and reappend..IF game isn't over
  if (hero.healthPoints >= 0 && defender.healthPoints >= 0) {
    heroDiv.innerHTML = '';
    heroDiv.appendChild(createCard(hero));
    defenderDiv.innerHTML = '';
    defenderDiv.appendChild(createCard(defender));
  } else if (hero.healthPoints < 0) {
    alert(
      `you lose, rebel scum! ${hero.name} has ${
        hero.healthPoints
      } health remaining`
    );
  } else if (defender.healthPoints < 0) {
    alert(`Yeahoooo ${defender.name} has been defeted`);
    defender = characters[0];
    defenderDiv.innerHTML = '';
    defenderDiv.appendChild(createCard(defender));
  }
}

// FIGHT!
attackBtn.addEventListener('click', battle);
