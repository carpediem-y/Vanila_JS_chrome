function onGeoOk(position){
    const API_KEY = "4017cca526baf62086712c4283e3863f";
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    
    fetch(url).then(response => response.json()).then ((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("날씨 정보를 로드할 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);