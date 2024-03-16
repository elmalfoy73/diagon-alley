import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerResponseTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const timerStart = Date.now();

    return next.handle().pipe(
      //tap(() => console.log(Date.now() - timerStart))
      //tap(data => data.serverResponseTime = Date.now() - timerStart)
      map((data) => {
        return {
          serverResponseTime: Date.now() - timerStart,
        };
      }),
    );
  }
}
