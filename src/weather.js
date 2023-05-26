const API_KEY = "3e2ecaec911a1c1e6e690d3b40a911fc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityName = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            cityName.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃`;
        });
}

function onGeoErr() {
    alert("can't find your position");
}




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);