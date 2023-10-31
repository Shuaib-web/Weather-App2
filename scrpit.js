const apiKey = "4e323e25a41eb88616b82e8715147146";

const weatherDataEl = document.getElementById('weatherData');

const cityInputEl = document.getElementById('city-input');

const formEl = document.querySelector('form');

addEventListener('submit', (event)=>{
     event.preventDefault();
     // Targeting the value of the city input
     const cityValue = cityInputEl.ariaValueMax;
     getWeatherData(cityValue);
} );


// Fetching Data from API
async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        

    } catch (error) {
        
    }
}