import { Injectable } from '@nestjs/common';
import { WeatherData, WeatherForecast } from 'src/interfaces/interfaces';

@Injectable()
export class WeatherService {
  private weather = {};
  private forecast = [];
  async find(city: string, a: string): Promise<WeatherData> {
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

  async findForeCast(
    lat: number,
    lon: number,
    a: string,
  ): Promise<WeatherForecast> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${a}`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Erro: ${res.status}`);
      }

      const foreCastData = await res.json();
      console.log(foreCastData);
      return (this.forecast = foreCastData);
    } catch (error) {
      console.log('erro na requisição:', error);
    }
  }
}
