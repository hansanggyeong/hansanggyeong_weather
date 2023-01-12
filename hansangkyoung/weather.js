const API_KEY = "bf5c3dc6155e5a833b9533e252518a9c";
const COORDS = 'coords'; 

const weatherInfo = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');

function init() {
    askForCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
}

function handleError() {
    console.log("can't not access to location");
}


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`).then(function(response) {
        return response.json();
    })
    .then(function(json) { 
        const temperature = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
     
        weatherInfo.innerText = `${temperature} °C / @${place} / ${weatherDescription}`;
        weatherIconImg.setAttribute('src', weatherIconAdrs);
    })
    .catch((error) => console.log("error:", error));
}

init();