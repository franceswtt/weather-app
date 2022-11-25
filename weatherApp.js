let weather = {
    "apiKey": "529c01313f53116e5870bec82e188d98",
    fetchWeather: function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data
        const {icon, description} = data.weather[0]
        const {feels_like, humidity, temp, temp_max, temp_min} = data.main
        console.log(name, icon, description, feels_like, temp)
        document.querySelector(".city").textContent = name
        document.querySelector(".temp").textContent = `${Math.round(temp)} °C`
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".description").textContent = description
        document.querySelector(".feels").textContent = `Feels like ${feels_like} °C`
        document.querySelector(".humidity").textContent = `humidity: ${humidity}%`
        document.querySelector(".max").textContent = `${Math.round(temp_max)} °C`
        document.querySelector(".min").textContent = `${Math.round(temp_min)} °C`
        document.querySelector(".result").style.display = `block`
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
    },
    search: function(){
        this.fetchWeather(document.querySelector(".city-input").value)
    }
}

document.querySelector(".search-btn").addEventListener("click", () => {
    weather.search()
})

document.querySelector(".city-input").addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        weather.search()
    }
})
