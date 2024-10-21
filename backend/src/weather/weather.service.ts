import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  private weather = {};
  async find(city: string, a: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${a}&lang=pt_br`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Erro: ${res.status}`);
      }

      const weatherData = await res.json();
      return (this.weather = weatherData);
    } catch (error) {
      console.log('erro na requisição:', error);
    }
  }
}
