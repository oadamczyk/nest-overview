import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnsupportedMediaTypeException,
  NotAcceptableException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JsonApiHeaderValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (
      context.switchToHttp().getRequest().headers['content-type'] !==
      'application/vnd.api+json'
    ) {
      // throw new UnsupportedMediaTypeException();
    }
    if (
      context.switchToHttp().getRequest().headers['accept'] !==
      'application/vnd.api+json'
    ) {
      throw new NotAcceptableException();
    }
    return next.handle().pipe();
  }
}
