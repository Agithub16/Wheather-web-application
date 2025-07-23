async function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "f17e31336cd24b40ef348651f0cf3635"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response  =  await fetch(apiUrl);
        const data  = await response.json();
        
        if (data.cod === 200) {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            const city = data.name;
            
            document.getElementById("weatherResult").innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Condition: ${weather}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = "City not found!";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}