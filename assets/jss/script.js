var coordinates = [];
var searchBtn = document.querySelector('#searchBtn');
var inputEl = document.querySelector('#cityInput');
var searchInput = '';
var cityLat = '';
var cityLon = '';
var cityNameEl = document.querySelector('#cityDisplay');
var tempEl = document.querySelector('.temp');
var windEl = document.querySelector('.wind');
var humidityEl = document.querySelector('.humidity');
var pressureEl = document.querySelector('.pressure');
var imgEl = document.querySelector('#weatherIcon');
var currentDate = new Date(Date.now()).toLocaleString();

var getWeather = function(coordsLat, coordsLon) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + coordsLat + '&lon=' + coordsLon + '&appid=1e02d4af87386189743a9965718bcc4f';
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                cityNameEl.textContent = data.name + ' ' + currentDate;
                tempEl.textContent = 'Temp: ' + data.main.temp + '°F';
                windEl.textContent = 'Wind: ' + data.wind.speed + ' MPH';
                humidityEl.textContent = 'Humidity: ' + data.main.humidity + ' %';
                pressureEl.textContent = 'Pressure: ' + data.main.pressure + ' in';
                var weatherIco = data.weather[0].icon;
                imgEl.src = 'http://openweathermap.org/img/wn/' + weatherIco + '@2x.png';
            });
        };
    });
};

var iconMaker = function(weather) {
    if (weather === 'Rain') {

    } else if (weather === 'Clouds') {

    }
}

var getCoords = function(city) {
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=1e02d4af87386189743a9965718bcc4f'
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                cityLat = data[0].lat;
                cityLon = data[0].lon;
                getWeather(cityLat, cityLon)
            });
        };
    });
};

var buttonHandler = function() {
    searchInput = inputEl.value.trim();
    getCoords(searchInput);
};

searchBtn.addEventListener('click', buttonHandler);