const apiKey = "99ecd4c5380ebc79b9e0d82737b00594";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");// to take manual user inputs
const searchbtn = document.querySelector(".search button");// to take manual user inputs
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block";//displaying error message
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name; //updating city name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; //updating temperature
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; //updating humidity
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"; //updating wind speed
    
    if (data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png"
    }
    else if (data.weather[0].src=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if (data.weather[0].src=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if (data.weather[0].src=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if (data.weather[0].src=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }

}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value); //gives city name in i/p field and passes it in checkwheather to fetch api
})

checkweather();