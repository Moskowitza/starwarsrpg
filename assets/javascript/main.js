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
// Loop through the characters and add them to CharactersDiv
let hero;
let defender;
function select(e) {
  console.log(e.target.parentNode.id);
  if (!hero) {
    hero = document.getElementById(e.target.parentNode.id);
    charactersDiv.removeChild(hero);
    heroDiv.append(hero);
  } else if (!defender) {
    defender = document.getElementById(e.target.parentNode.id);
    charactersDiv.removeChild(defender);
    defenderDiv.append(defender);
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
