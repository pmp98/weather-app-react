import axios from "axios";
const API_KEY = "27623f179f9c139c29b6334f5f3f4b1f";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return error.response;
  }
};
