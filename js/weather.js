const icon = document.querySelector("#weather-icon");

function onGeoOk(position){
    const API_KEY = "4017cca526baf62086712c4283e3863f";
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then ((data) => {
        const weather = document.querySelector("#weather-weather");
        const city = document.querySelector("#city");
    
        //날씨 아이콘
        const weatherIcon = data.weather[0].icon;
        const weatherURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        icon.setAttribute('src',weatherURL);
    });
}

function onGeoError() {
    alert("날씨 정보를 로드할 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);