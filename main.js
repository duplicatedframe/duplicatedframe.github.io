let config = {
  devName: "joan adams",
  devTitle:"game developer",
  possibleTitles: [
    "barista",
    "gunpla enthusiast",
    "splatoon enjoyer",
    "fighting game player",
  ],
  devPronouns: "she/they",
  approxLat: 37.804,
  approxLong: -122.271,
};


async function populateAbout() {
  
}

async function populateBonus() {
  const weatherRequestURL = "https://api.pirateweather.net/forecast/fPa5b9j8gj94mU8MeLy3VaO3b8vUEr8U898wHfDR/"+ config.approxLat + "," + config.approxLong;
  const weatherRequest = new Request(weatherRequestURL);
  
  const weatherResponse = await fetch(weatherRequest);
  
  document.getElementById('weather-date-and-time-label').textContent = toString(weatherResponse.currently.time);
  document.getElementById('weather-temp-and-descrip-label').textContent = weatherResponse.currently.summary;
  document.getElementById('weather-icon-offset').textContent = weatherResponse.currently.icon;
}

async function populateProjects() {
  
}

async function populate() {
  populateAbout();
  populateProjects();
  populateBonus();
}

window.addEventListener("load", (event) => {
  populate();
});