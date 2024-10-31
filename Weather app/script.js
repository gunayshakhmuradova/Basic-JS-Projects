const apiKey = '046bf5bf4d4b7eabd050064fedd4f20a';
const city = 'Baku';

const cityElement = document.querySelector('.city');
const countryElement = document.querySelector('.country');
const tempElement = document.querySelector('.temp');
const descElement = document.querySelector('.desc');

async function getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        cityElement.textContent = data.name;
        countryElement.textContent = data.sys.country;
        tempElement.textContent = `${data.main.temp}°C`;
        descElement.textContent = data.weather[0].description;
    } catch (error) {
        console.error('Weather data fetch failed', error);
    }
}

getWeather();
