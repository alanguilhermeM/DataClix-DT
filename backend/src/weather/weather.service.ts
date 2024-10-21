import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  private weather = {};
  async find(lat: number, lon: number, a: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${a}`;
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
