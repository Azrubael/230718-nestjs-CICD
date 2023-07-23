import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Helo, Azrubael. You\'re on fire!';
  }
}
