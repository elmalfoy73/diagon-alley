import { Get, Controller, Render, UseInterceptors } from '@nestjs/common';
import { AppService, Response } from './app.service';
import { ServerResponseTimeInterceptor } from './time.interceptor';

@Controller()
@UseInterceptors(ServerResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.pug') // <= Название вашего представления
  getIndexPage() {
    return { user: 'Hello world!' }; // Модель представления
  }

  @Get('/index.pug')
  @Render('index.pug')
  getIndex() {}

  @Get('/shops.pug')
  @Render('shops.pug')
  getShop() {}

  @Get('/photos.pug')
  @Render('photos.pug')
  getPhotos() {}

  @Get('/about.pug')
  @Render('about.pug')
  getAbout() {}

  @Get('/flourishandBlotts.pug')
  @Render('flourishandBlotts.pug')
  getFlourishandBlotts() {}

  @Get()
  getServerResponse(): Response {
    return this.appService.getServerResponse();
  }
}
