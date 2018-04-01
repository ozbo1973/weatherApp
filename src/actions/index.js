import axios from "axios";
import keys from "../config";

const API_KEY = keys.API_KEY;
// if (process.env.ENVIRONMENT === 'production'){API_KEY=P_API_KEY}
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
