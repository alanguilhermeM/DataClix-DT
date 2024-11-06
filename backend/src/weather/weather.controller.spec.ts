import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { WeatherData } from 'src/interfaces/interfaces';
import { mockFind } from 'src/mocks/weatherData.mock';
// import { BadRequestException } from '@nestjs/common';

describe('WeatherController', () => {
  let weatherController: WeatherController;
  let weatherService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [WeatherController],
      providers: [
        {
          provide: WeatherService,
          useValue: {
            find: jest.fn().mockResolvedValue(mockFind as WeatherData),
            findForeCast: jest.fn(),
          },
        },
      ],
    }).compile();

    weatherController = module.get<WeatherController>(WeatherController);
    weatherService = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(weatherController).toBeDefined();
    expect(weatherService).toBeDefined();
  });

  describe('find', () => {
    it('should return an object of the city Tiradentes', async () => {
      const result: WeatherData = await weatherController.find(
        'Tiradentes',
        'ae606b0b8c5756e44a7c8cbe8d65310b',
      );

      expect(result).toEqual(mockFind);
      expect(result.name).toBe('Tiradentes');
    });

    // it('should throw an error "city is required"', async () => {
    //   jest.spyOn(weatherService, 'find').mockResolvedValue(new BadRequestException());

    //   expect(
    //     weatherController.find('', 'ae606b0b8c5756e44a7c8cbe8d65310b'),
    //   ).toThrow();
    // });
  });

  //   describe('findForeCast', async () => {});
});
