import { WeatherData } from 'src/interfaces/interfaces';

const mockFind: WeatherData = {
  base: 'stations',
  coord: {
    lon: -44.1781,
    lat: -21.1103,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'nublado',
      icon: '04d',
    },
  ],
  main: {
    temp: 24.6,
    feels_like: 24.53,
    temp_min: 24.6,
    temp_max: 24.6,
    pressure: 1013,
    humidity: 54,
    sea_level: 1013,
    grnd_level: 901,
  },
  visibility: 10000,
  wind: {
    speed: 2.9,
    deg: 107,
    gust: 3.57,
  },
  clouds: {
    all: 99,
  },
  dt: 1730306953,
  sys: {
    country: 'BR',
    sunrise: 1730276073,
    sunset: 1730322359,
  },
  timezone: -10800,
  id: 3446420,
  name: 'Tiradentes',
  cod: 200,
};

export { mockFind };
