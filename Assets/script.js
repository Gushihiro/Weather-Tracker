var myApi = '89a2382deeb35b552d6a7289bec4a673';
var userInput = document.querySelector("#user-input");
var searchBtn = document.querySelector("#searchBtn");
var searchList = document.querySelector(".list-group");
var cityName = document.querySelector("#city-name");

var currentDate = moment().format("MM/DD/YYYY");
var weather1Date = moment().add(1, 'day').format("MM/DD/YYYY");
var weather2Date = moment().add(2, 'day').format("MM/DD/YYYY");
var weather3Date = moment().add(3, 'day').format("MM/DD/YYYY");
var weather4Date = moment().add(4, 'day').format("MM/DD/YYYY");
var weather5Date = moment().add(5, 'day').format("MM/DD/YYYY");

var searchCard = document.querySelector("#searchCard");
var weatherCard = document.querySelector("#card2");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var uvindex = document.querySelector("#uvindex");

var day1date = document.querySelector("#day1date");
var day1icon = document.querySelector("#day1icon");
var day1temp = document.querySelector("#day1temp");
var day1humidity = document.querySelector("#day1humidity");
var day2date = document.querySelector("#day2date");
var day2icon = document.querySelector("#day2icon");
var day2temp = document.querySelector("#day2temp");
var day2humidity = document.querySelector("#day2humidity");
var day3date = document.querySelector("#day3date");
var day3icon = document.querySelector("#day3icon");
var day3temp = document.querySelector("#day3temp");
var day3humidity = document.querySelector("#day3humidity");
var day4date = document.querySelector("#day4date");
var day4icon = document.querySelector("#day4icon");
var day4temp = document.querySelector("#day4temp");
var day4humidity = document.querySelector("#day4humidity");
var day5date = document.querySelector("#day5date");
var day5icon = document.querySelector("#day5icon");
var day5temp = document.querySelector("#day5temp");
var day5humidity = document.querySelector("#day5humidity");
function fetchData() {
    var userCity = userInput.value
    var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${myApi}`
    var weekWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${myApi}`
    fetch(weekWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            day1date.textContent = weather1Date;
            day1icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png">';
            day1temp.textContent = data.list[0].main.temp + "°F";
            day1humidity.textContent = data.list[0].main.humidity + "%";
            day2date.textContent = weather2Date;
            day2icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png">';
            day2temp.textContent = data.list[8].main.temp + "°F";
            day2humidity.textContent = data.list[8].main.humidity + "%";
            day3date.textContent = weather3Date;
            day3icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png">';
            day3temp.textContent = data.list[16].main.temp + "°F";
            day3humidity.textContent = data.list[16].main.humidity + "%";
            day4date.textContent = weather4Date;
            day4icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png">';
            day4temp.textContent = data.list[24].main.temp + "°F";
            day4humidity.textContent = data.list[24].main.humidity + "%";
            day5date.textContent = weather5Date;
            day5icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png">';
            day5temp.textContent = data.list[32].main.temp + "°F";
            day5humidity.textContent = data.list[32].main.humidity + "%";
        })
    fetch(currentWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var newList = document.createElement("li");
            newList.setAttribute("class", "list-group-item d-grid gap-2")
            var newLink = document.createElement("button");
            newLink.append(userCity)
            newLink.setAttribute("type", "button");
            newLink.setAttribute("class", "btn btn-outline-secondary")
            newList.append(newLink);
            searchList.append(newList);
            var cityBtn = document.querySelectorAll(".btn-outline-secondary")
            var cityBtnArray = [].slice.call(cityBtn)
            cityName.innerHTML = data.name + " " + currentDate + '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
            temperature.textContent = "Temperature: " + data.main.temp + "°F";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";
            wind.textContent = "Wind Speed: " + data.wind.speed + " MPH"

            var latitude = data.coord.lat;
            var longitude = data.coord.lon;
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${myApi}`)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        uvindex.textContent = data.current.uvi
                            if (uvindex.textContent >= 3 && uvindex.textContent <=5) {
                                uvindex.style.backgroundColor = "yellow";
                            }
                            if (uvindex.textContent >= 6 && uvindex.textContent <= 7) {
                                uvindex.style.backgroundColor = "orange";
                            }
                            if (uvindex.textContent >= 8 && uvindex.textContent <= 10) {
                                uvindex.style.backgroundColor = "red";
                            }
                            if (uvindex.textContent > 10) {
                                uvindex.style.backgroundColor = "violet";
                            }
                    })
            
            for (let i = 0; i < cityBtnArray.length; i++) {   
                cityBtnArray[i].addEventListener("click", function() {
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.textContent}&units=imperial&appid=${myApi}`)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            day1date.textContent = weather1Date;
                            day1icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png">';
                            day1temp.textContent = data.list[0].main.temp + "°F";
                            day1humidity.textContent = data.list[0].main.humidity + "%";
                            day2date.textContent = weather2Date;
                            day2icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png">';
                            day2temp.textContent = data.list[8].main.temp + "°F";
                            day2humidity.textContent = data.list[8].main.humidity + "%";
                            day3date.textContent = weather3Date;
                            day3icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png">';
                            day3temp.textContent = data.list[16].main.temp + "°F";
                            day3humidity.textContent = data.list[16].main.humidity + "%";
                            day4date.textContent = weather4Date;
                            day4icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png">';
                            day4temp.textContent = data.list[24].main.temp + "°F";
                            day4humidity.textContent = data.list[24].main.humidity + "%";
                            day5date.textContent = weather5Date;
                            day5icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png">';
                            day5temp.textContent = data.list[32].main.temp + "°F";
                            day5humidity.textContent = data.list[32].main.humidity + "%";
                        })
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.textContent}&units=imperial&appid=${myApi}`)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        cityName.innerHTML = data.name + " " + currentDate + '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                        temperature.textContent = "Temperature: " + data.main.temp + "°F";
                        humidity.textContent = "Humidity: " + data.main.humidity + "%";
                        wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
                        var latitude = data.coord.lat;
                        var longitude = data.coord.lon;
                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${myApi}`)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                uvindex.textContent = data.current.uvi
                                if (uvindex.textContent >= 3 && uvindex.textContent <=5) {
                                    uvindex.style.backgroundColor = "yellow";
                                }
                                if (uvindex.textContent >= 6 && uvindex.textContent <= 7) {
                                    uvindex.style.backgroundColor = "orange";
                                }
                                if (uvindex.textContent >= 8 && uvindex.textContent <= 10) {
                                    uvindex.style.backgroundColor = "red";
                                }
                                if (uvindex.textContent > 10) {
                                    uvindex.style.backgroundColor = "violet";
                                }
                    })
                    })
                })
            }
        })
}
searchBtn.addEventListener("click", function() {
    searchCard.setAttribute("class", "card col-4 p-3 m-5")
    weatherCard.style.display = "flex";
    fetchData();    
})
