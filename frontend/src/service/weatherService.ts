import { ForeCastData, WeatherData } from "@/interfaces/weatherTypes";
import { api } from "./api";

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await api.get("/weather", {
      params: { city },
      headers: { "api-key": process.env.NEXT_PUBLIC_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
    throw error;
  }
};

export const fetchForeCastData = async (lat: number, lon: number): Promise<ForeCastData[]> => {
  try {
    const response = await api.get("/weather/forecast", {
      params: { lat, lon },
      headers: { "api-key": process.env.NEXT_PUBLIC_API_KEY },
    });
    const result = response.data;

    const uniqueForeCastDays: number[] = [];
    const daysForeCast = result.list.filter((forecast: ForeCastData) => {
      const foreCastDate = new Date(forecast.dt_txt).getDate();
      if (!uniqueForeCastDays.includes(foreCastDate)) {
        return uniqueForeCastDays.push(foreCastDate);
      }
    })

    return daysForeCast;
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
    throw error;
  }
};
