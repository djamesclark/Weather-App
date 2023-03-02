let citySearchbtn = document.querySelector('#citySearch')
let weatherCity = document.querySelector('#weatherCity')
let currentWeatherContainer = document.querySelector('#currentWeather')
let weatherForecastContainer = document.querySelector('#weatherForecast')

function start(event) {
    event.preventDefault()

    let city = weatherCity.value
    getWeather(city)
    getForecast(city)
}

function getWeather(cityName) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=b26ef5e661df23ce4ce2891ab8eebc4d'

    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            currentWeatherContainer.innerHTML = ''

            //    create and h1 for the city name
            let cityNameEl = document.createElement('h1')
            // addd the content from teh api data
            cityNameEl.textContent = data.name
            // append to the current weather container
            currentWeatherContainer.append(cityNameEl)

            // city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
            let dateEl = document.createElement('h1')
            dateEl.textContent = dayjs().format('MMM D, YYYY')
            currentWeatherContainer.append(dateEl)


            let iconCode = data.weather.icon
            let iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            let iconEl = document.createElement('div')
            
            currentWeatherContainer.append(iconEl)



            let temperatureEl = document.createElement('p')
            temperatureEl.textContent = ("Temp: " + data.main.temp)
            currentWeatherContainer.append(temperatureEl)

            let humidityEl = document.createElement('p')
            humidityEl.textContent = ("Humidity: " + data.main.humidity)
            currentWeatherContainer.append(humidityEl)

            windspeedEl = document.createElement ('p')
            windspeedEl.textContent = ("Wind Speed: " + data.wind.speed)
            currentWeatherContainer.append(windspeedEl)

        });
}

function getForecast(cityName) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=b26ef5e661df23ce4ce2891ab8eebc4d'

    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)


        });
}


citySearchbtn.addEventListener('submit', start)