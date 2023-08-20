const API_KEY = "d2cdd169c5490629bed44f32ffe0e2fc";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} \ ${data.main.temp}°C`;
		});
}

function onGeoError() {
	alert("위치를 찾을 수 없어요 :(");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
