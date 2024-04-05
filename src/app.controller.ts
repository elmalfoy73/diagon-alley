import { Get, Controller, Render, UseInterceptors } from '@nestjs/common';
import { AppService, Response } from './app.service';
import { ServerResponseTimeInterceptor } from './time.interceptor';

@Controller()
@UseInterceptors(ServerResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index') // <= Название вашего представления
  getIndexPage() {
    return { user: 'Hello world!' }; // Модель представления
  }

  @Get('/index')
  @Render('index.pug')
  getIndex() {}

  @Get('/shops')
  @Render('shops.pug')
  getShop() {}

  @Get('/photos')
  @Render('photos.pug')
  getPhotos() {}

  @Get('/about')
  @Render('about.pug')
  getAbout() {}

  @Get('/flourishandBlotts')
  @Render('flourishandBlotts.pug')
  getFlourishandBlotts() {}

  @Get()
  getServerResponse(): Response {
    return this.appService.getServerResponse();
  }
}
