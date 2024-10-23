import { api } from "./api";

export const fetchWeatherData = async (city: string) => {
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
