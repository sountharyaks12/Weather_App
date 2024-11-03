let key = "9f0aba9ef3d68ce0c4b32ea5048eb698";
let city;
async function apiFunction() {
    city = document.querySelector("input").value;
    try {
        let link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

        console.log(link);
        let js = await link.json();
        console.log(js);
        let ans_city = document.querySelector(".city");
        let temperature = document.querySelector(".temperature");
        let humidity = document.querySelector(".humidity");
        let pressure = document.querySelector(".pressure");
        let windspeed = document.querySelector(".windspeed");
        let description = document.querySelector(".description");

        ans_city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${city}`;
        temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${js.main.temp} F`;
        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${js.main.humidity}`;
        pressure.innerHTML = `pressure ${js.main.pressure}`;
        windspeed.innerHTML = `<i class="fa-solid fa-wind"></i> ${js.wind.speed}`;
        description.innerHTML = `Description: ${js.weather[0].description}`;
        document.getElementById("city").value = "";
    }
    catch (err) {
        let ans_city = document.querySelector(".city");
        let temperature = document.querySelector(".temperature");
        let humidity = document.querySelector(".humidity");
        let pressure = document.querySelector(".pressure");
        let windspeed = document.querySelector(".windspeed");
        let description = document.querySelector(".description");

        ans_city.innerHTML = `<i class="fa-solid fa-location-dot"></i>0`
        temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>0F`;
        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> 0`;
        pressure.innerHTML = `pressure 0`;
        windspeed.innerHTML = '<i class="fa-solid fa-wind"></i>0'
        description.innerHTML = '0';
    }
}
