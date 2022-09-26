import { WeatherAPI } from "../js/weather-api.js";

class WeatherAPITest {
    
    init(city){
        this.testURLBuilder(city);
        this.testAPI(city);
    }

    testURLBuilder(city){
        let weatherAPI = new WeatherAPI();
        weatherAPI.buildURL(city);
    }

    testAPI(city){
        const weatherAPI = new WeatherAPI();
        weatherAPI.invoke(city)
          .then( (responseJSON) => {
            console.log(responseJSON);
          });
    }
}

export{WeatherAPITest}