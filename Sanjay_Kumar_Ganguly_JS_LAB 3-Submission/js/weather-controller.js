import { WeatherAPI } from "./weather-api.js";
import { Utils, DEGREES_CELCIUS_SYMBOL } from "./utils.js";

class WeatherController{

    init(city){

        const weatherAPI = new WeatherAPI();
        weatherAPI.invoke(city)
            .then((responseJSON) => {
                this.updateUI(responseJSON);
            });

        this.addEventHandlers();
    }

    addEventHandlers(){
        const searchBoxElement = document.querySelector(".search-box");
        searchBoxElement.param1 = this;
        searchBoxElement.addEventListener("keypress", this.handleSearch);
    }

    handleSearch(event){
        if(event.key == 'Enter'){
            
            const eventTarget = event.target;      
            const userData = eventTarget.value;
            let weatherControllerObj = eventTarget.param1;
            const weatherAPI = new WeatherAPI();

            weatherAPI.invoke(userData)
                .then( (responseJSON) => {
                    console.log(responseJSON);
                    weatherControllerObj.updateUI(responseJSON);
                });
        }
    }

    updateUI(responseJSON){
        document.querySelector(".location .city").innerText = `${responseJSON.name}, ${responseJSON.sys.country}`;
        document.querySelector(".location .date").innerText = Utils.formatDate();
        document.querySelector(".current .temp").innerHTML = `${responseJSON.main.temp} ${DEGREES_CELCIUS_SYMBOL}`;
        document.querySelector(".current .weather").innerText = `${responseJSON.weather[0].main}`;
        document.querySelector(".current .hi-low").innerHTML = `${responseJSON.main.temp_min}${DEGREES_CELCIUS_SYMBOL} / ${responseJSON.main.temp_max}${DEGREES_CELCIUS_SYMBOL}`;
    }
}

export{WeatherController}