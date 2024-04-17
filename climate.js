function determineWeatherCondition(temperature) {
    let condition = temperature > 30 ? "Hot" : "Moderate";
    return condition;
}
let currentTemperature = 25; 
console.log("Weather condition: " + determineWeatherCondition(currentTemperature));
