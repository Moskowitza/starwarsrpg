console.log('main');
// create characters each character has Health Points`, `Attack Power` and `Counter Attack Power`.
const characters = [
  {
    name: 'yoda',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
  },
  {
    name: 'luke',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
  },
  {
    name: 'chewie',
    age: 1000,
    healthPoints: 100,
    attackPower: 100,
    counterAttack: 100,
  },
];

// 1 add heros to characters div
const charactersDiv = document.getElementById('characters');
const heroDiv = document.getElementById('hero');
const defenderDiv = document.getElementById('defender');
const attackBtn = document.getElementById('attack');
// Loop through the characters and add them to CharactersDiv
let heroNode;
let defenderNode;
let hero;
let defender;

function select(e) {
  console.log(e.target.parentNode.id);
  const selectedName = e.target.parentNode.id;
  // console.log(selectedName);
  if (!hero) {
    hero = characters.find(character => character.name === selectedName);
    console.log(hero);
  } else if (!defender) {
    defender = characters.find(character => character.name === selectedName);
    console.log(defender);
  }
  if (!heroNode) {
    heroNode = document.getElementById(e.target.parentNode.id);
    charactersDiv.removeChild(heroNode);
    heroDiv.append(heroNode);
  } else if (!defenderNode) {
    defenderNode = document.getElementById(e.target.parentNode.id);
    charactersDiv.removeChild(defenderNode);
    defenderDiv.append(defenderNode);
  }
}

characters.forEach(character => {
  console.log(character);
  const charCard = document.createElement('DIV');
  charCard.setAttribute('id', character.name);
  charCard.setAttribute('class', 'character');
  charCard.innerHTML = `
        <img src="assets/images/${character.name}.jpg">
        <p>${character.name}</p>
      `;
  charCard.addEventListener('click', select, false);
  charactersDiv.appendChild(charCard);
});

// FIGHT!
