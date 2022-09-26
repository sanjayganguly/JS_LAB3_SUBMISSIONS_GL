const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "08a3b90e6888abe49c49b671e358abc1";

class WeatherAPI{

    constructor(){
        this.apiURL = new URL(API_BASE_URL);
    }

    invoke(userData){
        this.buildURL(userData);
        return this.apiJSONResponse();
    }
    
    async apiJSONResponse(){
        let response = await fetch(this.apiURL)
    
        if (response.status == 200){
          let responseJSON = await response.json();
          return responseJSON;
        }
        else{
          return "ERROR";
        }
      }

    // Build the URL for API
    buildURL(userData){
        this.apiURL.searchParams.append("q", userData);
        this.apiURL.searchParams.append("appid", API_KEY);
        this.apiURL.searchParams.append("units", "metric");
    }

}

export{WeatherAPI}