import {
  BadRequestException,
  Controller,
  Get,
  Headers,
  Query,
  UseGuards,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiKeyGuard } from 'src/guards/api_key.guard';
import { WeatherData, WeatherForecast } from 'src/interfaces/interfaces';

@Controller('weather')
@UseGuards(ApiKeyGuard)
export class WeatherController {
  constructor(private weatherService: WeatherService) {}
  @Get()
  find(
    @Query('city') city: string,
    @Headers('api-key') apiKey: string,
  ): Promise<WeatherData> {
    if (!city) {
      throw new BadRequestException('City is required');
    }
    return this.weatherService.find(city, apiKey);
  }

  @Get('/forecast')
  findForeCast(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
    @Headers('api-key') apiKey: string,
  ): Promise<WeatherForecast> {
    if (!lat || !lon) {
      throw new BadRequestException('Latitude and longitude are required');
    }

    return this.weatherService.findForeCast(lat, lon, apiKey);
  }
}
