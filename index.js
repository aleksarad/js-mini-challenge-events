/***** Beginning of Starter Code ****/

const pokemonContainer = document.querySelector(".pokemon-container")

// render one player to the DOM
function renderPokemon(pokemon) {
  // create an element for the outer div
  const pokeDiv = document.createElement("div")

  // set attributes on the outer div
  pokeDiv.className = "poke"
  pokeDiv.dataset.number = pokemon.number

  // use innerHTML to create any child elements of the div
  pokeDiv.innerHTML = `
    <h3>${pokemon.name} (<em>${pokemon.type}</em>) - ${pokemon.number}</h3>
    <img src="${pokemon.photo}" alt="${pokemon.name}">
    <p class="likes">${pokemon.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  pokemonContainer.append(pokeDiv)
}

// for each player in the array, render to the DOM
POKEMON.forEach(renderPokemon)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const h1 = document.querySelector("h1#header")
h1.addEventListener("click", function(e) {
  toggleColor(h1);
})

function toggleColor(element) {
  if (element.style.color === "pink") {
    element.style.color = "black"
  } else {
    element.style.color = "pink"
  }
}


/***** Deliverable 2 *****/
/** Adding a new Pokemon to the page! **/
const pokemonForm = document.querySelector("#new-pokemon-form");

pokemonForm.addEventListener("submit", function(e) {
  e.preventDefault();

  //extract input values and add them to pokemon object
  const dexNum = pokemonForm.number;
  const pokeName = pokemonForm.name;
  const pokeType = pokemonForm.type;
  const pokePhoto = pokemonForm.photo;


  pokemon = {
    number: dexNum.value,
    name: pokeName.value,
    type: pokeType.value,
    photo: pokePhoto.value,
    likes: 0
  }

  renderPokemon(pokemon)
})


/***** Deliverable 3 *****/
pokemonContainer.addEventListener("click", function(e) {
    //select the closest pokemon div to the clicked button
    //it looks like you have to go up to the main parent, cant just say closes 'p' or '.likes'
    //essentially going from the largest parent container down the tree toward target
    const pokeDiv = e.target.closest(".poke");
    //select likes WITHIN that div
    const likes = pokeDiv.querySelector(".likes");
    //add 1 on click
    //parseInt isolates the num for us, otherwise textContent is a string
    const increasedLike = parseInt(likes.textContent) + 1;
    likes.textContent = `${increasedLike} likes`;
})