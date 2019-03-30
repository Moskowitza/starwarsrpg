console.log('main');
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
let hero; // the object
let defender;

function select(e) {
  console.log(e.target.parentNode.id);
  const selectedName = e.target.parentNode.id;
  // console.log(selectedName);
  if (!hero) {
    // if no hero, make one
    hero = characters.find(character => character.name === selectedName);
    console.log(hero);
  } else if (!defender) {
    // if there is a hero but no defender..
    defender = characters.find(character => character.name === selectedName);
    console.log(defender);
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

  // WE need to update the DOM
  heroDiv.innerHTML = '';
  // update heroNode with new hps
  heroDiv.appendChild(createCard(hero));
  defenderDiv.innerHTML = '';
  defenderDiv.appendChild(createCard(defender));
  // rite a function that creates a character card
  // put hero back in herodiv, defender in defenderDiv
}

// FIGHT!
attackBtn.addEventListener('click', battle);
