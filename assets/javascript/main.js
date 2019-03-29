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
// Loop through the characters and add them to CharactersDiv
function select(e) {
  console.log(e.target.parentNode.id);
}

characters.forEach(character => {
  console.log(character);
  const charCard = document.createElement('DIV');
  charCard.innerHTML = `
    <div id=${character.name} class="character">
        <img src="assets/images/${character.name}.jpg">
        <p>${character.name}</p>
    </div>`;
  charCard.addEventListener('click', select, false);
  charactersDiv.appendChild(charCard);
});
