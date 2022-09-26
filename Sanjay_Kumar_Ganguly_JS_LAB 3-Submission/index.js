import { WeatherController } from "./js/weather-controller.js"
import { WeatherAPITest } from "./js-test/weather-api-test.js";

const initialCity = "Chandigarh";

const weatehrAPITest = new WeatherAPITest();
weatehrAPITest.init(initialCity);

const weatehController = new WeatherController();
weatehController.init(initialCity);

