var coordinates = [];
var searchBtn = document.querySelector('#searchBtn');
var inputEl = document.querySelector('#cityInput');
var historyEl = document.querySelector('.history');
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

var historyLat = '';
var historyLon = '';

$(document).on('click', '.historyButtons', function() {
    var historyCity = this.id;

    var apiUrl1 = 'http://api.openweathermap.org/geo/1.0/direct?q=' + historyCity + '&limit=1&appid=1e02d4af87386189743a9965718bcc4f'
    fetch(apiUrl1).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                historyLat = data[0].lat;
                historyLon = data[0].lon;
                getWeather(historyLat, historyLon);
                get5Day(historyLat, historyLon);
            });
        };
    });

    
});

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
                imgEl.src = 'http://openweathermap.org/img/wn/' + weatherIco + '.png';
                if (data.main.humidity < 25) {
                    humidityEl.style.background = 'blue';
                } else if (data.main.humidity > 75) {
                    humidityEl.style.background = 'red';
                } else {
                    humidityEl.style.background = 'orange';
                };
            });
        };
    });
};

var get5Day = function(coordsLat, coordsLon) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=' + coordsLat + '&lon=' + coordsLon + '&appid=1e02d4af87386189743a9965718bcc4f';
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log('5day', data);
                var d1Date = document.querySelector('#d1Date');
                var d1Temp = document.querySelector('#d1Temp');
                var d1Wind = document.querySelector('#d1Wind');
                var d1Humidity = document.querySelector('#d1Humidity');
                var d1Img = document.querySelector('#d1Ico');

                var d2Date = document.querySelector('#d2Date');
                var d2Temp = document.querySelector('#d2Temp');
                var d2Wind = document.querySelector('#d2Wind');
                var d2Humidity = document.querySelector('#d2Humidity');
                var d2Img = document.querySelector('#d2Ico');

                var d3Date = document.querySelector('#d3Date');
                var d3Temp = document.querySelector('#d3Temp');
                var d3Wind = document.querySelector('#d3Wind');
                var d3Humidity = document.querySelector('#d3Humidity');
                var d3Img = document.querySelector('#d3Ico');

                var d4Date = document.querySelector('#d4Date');
                var d4Temp = document.querySelector('#d4Temp');
                var d4Wind = document.querySelector('#d4Wind');
                var d4Humidity = document.querySelector('#d4Humidity');
                var d4Img = document.querySelector('#d4Ico');

                var d5Date = document.querySelector('#d5Date');
                var d5Temp = document.querySelector('#d5Temp');
                var d5Wind = document.querySelector('#d5Wind');
                var d5Humidity = document.querySelector('#d5Humidity');
                var d5Img = document.querySelector('#d5Ico');

                d1Date.textContent = data.list[2].dt_txt;
                d1Img.src = 'http://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '.png';
                d1Temp.textContent = 'Temp: ' + data.list[2].main.temp + '°F';
                d1Wind.textContent = 'Wind: ' + data.list[2].wind.speed + ' MPH';
                d1Humidity.textContent = 'Humidity: ' + data.list[2].main.humidity + ' %';

                d2Date.textContent = data.list[10].dt_txt;
                d2Img.src = 'http://openweathermap.org/img/wn/' + data.list[10].weather[0].icon + '.png';
                d2Temp.textContent = 'Temp: ' + data.list[10].main.temp + '°F';
                d2Wind.textContent = 'Wind: ' + data.list[10].wind.speed + ' MPH';
                d2Humidity.textContent = 'Humidity: ' + data.list[10].main.humidity + ' %';

                d3Date.textContent = data.list[18].dt_txt;
                d3Img.src = 'http://openweathermap.org/img/wn/' + data.list[18].weather[0].icon + '.png';
                d3Temp.textContent = 'Temp: ' + data.list[18].main.temp + '°F';
                d3Wind.textContent = 'Wind: ' + data.list[18].wind.speed + ' MPH';
                d3Humidity.textContent = 'Humidity: ' + data.list[18].main.humidity + ' %';

                d4Date.textContent = data.list[26].dt_txt;
                d4Img.src = 'http://openweathermap.org/img/wn/' + data.list[26].weather[0].icon + '.png';
                d4Temp.textContent = 'Temp: ' + data.list[26].main.temp + '°F';
                d4Wind.textContent = 'Wind: ' + data.list[26].wind.speed + ' MPH';
                d4Humidity.textContent = 'Humidity: ' + data.list[26].main.humidity + ' %';

                d5Date.textContent = data.list[34].dt_txt;
                d5Img.src = 'http://openweathermap.org/img/wn/' + data.list[34].weather[0].icon + '.png';
                d5Temp.textContent = 'Temp: ' + data.list[34].main.temp + '°F';
                d5Wind.textContent = 'Wind: ' + data.list[34].wind.speed + ' MPH';
                d5Humidity.textContent = 'Humidity: ' + data.list[34].main.humidity + ' %';

            });
        };
    });
};

var getCoords = function(city) {
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=1e02d4af87386189743a9965718bcc4f'
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                cityLat = data[0].lat;
                cityLon = data[0].lon;
                getWeather(cityLat, cityLon);
                get5Day(cityLat, cityLon);
            });
        };
    });
};

var buttonMaker = function(city) {
    var button = document.createElement('btn');
    button.textContent = city;
    button.id = city
    button.classList = 'historyButtons btn btn-primary m-2';
    button.dataset.lat = cityLat;
    button.dataset.lon = cityLon;
    historyEl.appendChild(button);

}

var buttonHandler = function() {
    searchInput = inputEl.value.trim();
    getCoords(searchInput);
    buttonMaker(searchInput);
};



searchBtn.addEventListener('click', buttonHandler);