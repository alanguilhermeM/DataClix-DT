import { Body, Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiKeyGuard } from 'src/guards/api_key.guard';

@Controller('weather')
@UseGuards(ApiKeyGuard)
export class WeatherController {
  constructor(private weatherService: WeatherService) {}
  @Get()
  find(
    @Body('city') city: string,
    @Headers('api-key') apiKey: string,
  ) {
    return this.weatherService.find(city, apiKey);
  }
}
