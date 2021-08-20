const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];
let typeNo = 0;

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  for (let i = 0; i < players.length; i++) {
    detailedPlayers.push({
      name: players[i],
      strength: getRandomStrength(),
      image: `../images/super-${i + 1}.png`,
      type: typeOfPlayer(),
    });
  }
  // Type your code here

  return detailedPlayers;
};
const typeOfPlayer = () => {
  if (typeNo === 0) {
    typeNo = 1;
  } else {
    typeNo = 0;
  }
  return typeNo === 1 ? "hero" : "villain";
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  return Math.floor(Math.random() * 100);
  // Note: You can use Math.random() and Math.ceil()
};

const buildPlayers = (players, type) => {
  let fragment = "";

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  for (let i = 0; i < players.length; i++) {
    if (players[i].type.toLowerCase() === type.toLowerCase()) {
      fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
    }
  }

  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(players, "villain");
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
