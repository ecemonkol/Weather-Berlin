function getElement(id) {
    return document.getElementById(id)
}

const url = "https://api.open-meteo.com/v1/forecast?latitude=52.5063862&longitude=13.0951045&current_weather=true";


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        getElement('latitude').innerText = data['latitude']
        getElement('longitude').innerText = data['longitude']
        getElement('timezone').innerText = data['timezone']
        getElement('elevation').innerText = data['elevation']
        getElement('temperature').innerText = data['current_weather']['temperature']
        getElement('windspeed').innerText = data['current_weather']['windspeed']
        getElement('weathercode').innerText = data['current_weather']['weathercode']
        getElement('winddirection').innerText = data['current_weather']['winddirection']        })
    .catch((error) => {
        console.error(error);
    });

    
const weatherData = data['current_weather']['temperature']
const temperature = weatherData.temperature;
    
const messageElement = document.querySelector('h4');
    
    
    if (temperature > 30) {
      messageElement.textContent = "It's really hot today!";
    } else if (temperature > 20) {
      messageElement.textContent = "It's a nice day outside.";
    } else if (temperature > 10) {
      messageElement.textContent = "It's a bit chilly today.";
    } else {
      messageElement.textContent = "Brrr, it's freezing!";
    }