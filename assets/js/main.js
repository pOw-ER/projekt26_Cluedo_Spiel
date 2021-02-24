let suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepeneur",
    age: "45",
    description: "He has a lot of connections",
    image: "assets/img/mrGreen.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: "26",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "assets/img/drOrchid.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: "22",
    description: "Billionaire video game designer",
    image: "assets/img/profPlum.jpg",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: "31",
    description: "She is an A-list movie star with a dark past",
    image: "assets/img/missScarlet.jpg",
    color: "red",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: "36",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "assets/img/mrsPeacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Football player",
    age: "62",
    description: "He is a former football player who tries to get by on his former glory",
    image: "assets/img/mrMustard.jpg",
    color: "yellow",
  }
]
let weaponsArray = [
  {
    name: "rope",
    weight: "10",
  },
  {
    name: "knife",
    weight: "8",
  },
  {
    name: "candlestick",
    weight: "2",
  },
  {
    name: "dumbbell",
    weight: "30",
  },
  {
    name: "poison",
    weight: "2",
  },
  {
    name: "axe",
    weight: "15",
  },
  {
    name: "bat",
    weight: "13",
  },
  {
    name: "trophy",
    weight: "25",
  },
  {
    name: "pistol",
    weight: "20",
  }
]
let roomsArray = [
  {
    name: "Dining Room",
  },
  {
    name: "Conservatory",
  },
  {
    name: "Kitchen",
  },
  {
    name: "Study",
  },
  {
    name: "Library",
  },
  {
    name: "Billiard Room",
  },
  {
    name: "Lounge",
  },
  {
    name: "Ballroom",
  },
  {
    name: "Hall",
  },
  {
    name: "Spa",
  },
  {
    name: "Living Room",
  },
  {
    name: "Observatory",
  },
  {
    name: "Theater",
  },
  {
    name: "Guest House",
  },
  {
    name: "Patio",
  }
]
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let container = document.getElementById('container')
let selectRandom = () => {
  let person = suspectsArray[getRandomInt(6)]
  let waffe = weaponsArray[getRandomInt(9)]
  let room = roomsArray[getRandomInt(15)]
  console.log(person, waffe, room);
  container.innerHTML = `<div class="card">
  <div class="card__image-container">
    <img class="card__image" src="${person.image}" alt="">
  </div>
  <svg class="card__svg" viewBox="0 0 800 500">
    <path
      d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
      stroke="transparent" fill="#333" />
    <path class="card__line"
      d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink"
      stroke-width="3" fill="transparent" />
  </svg>

  <div class="card__content">
    <h2 class="card__title">${person.firstName} ${person.lastName} (Age : ${person.age})</h2>
    <h3>${person.occupation}</h3>
    <p>${person.description}</p>
    <div id="unten">
      <span>${waffe.name}</span><span>${room.name}</span>
    </div>
  </div>
</div>`
}

