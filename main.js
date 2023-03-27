const superHeroeImg = document.getElementById('super-heroe-img');
const superHeroeName = document.getElementById('super-heroe-name');
const superHeroeSection = document.getElementById('super-heroe');

function getRandomNumber() {
  return Math.floor(Math.random() * 731) + 1;
}

function clrSuperHeroe() {
  superHeroeSection.style.display = 'none';
  superHeroeName.innerText = '';
  superHeroeImg.setAttribute('src', '');
}

async function getSuperHeroe(id) {
  let apiUrl = `https://www.superheroapi.com/api.php/6111482135597360/${id}`;
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data);
}

async function setNewSuperHeroe() {
  clrSuperHeroe();
  const superHeroe = await getSuperHeroe(getRandomNumber());
  superHeroeName.innerText = superHeroe.biography['full-name'];
  superHeroeImg.setAttribute('src', `${superHeroe.image.url}`);
  superHeroeSection.style.display = 'flex';
}

document.getElementById('sort')
  .addEventListener('click', setNewSuperHeroe);

window.onload = () => {
  setNewSuperHeroe();
};

