import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['api-key'];

    const validApiKey = this.configService.get<string>('API_KEY');

    if (apiKey === validApiKey) {
      return true;
    }

    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
