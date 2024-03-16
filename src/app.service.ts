import { Injectable } from '@nestjs/common';

export interface Response {
  serverResponseTime: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getServerResponse(): Response {
    return {
      serverResponseTime: 0,
    };
  }
}
