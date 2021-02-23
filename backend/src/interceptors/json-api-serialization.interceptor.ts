import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SerializerInterface } from "../serializers/serializer.interface";

@Injectable()
export class JsonApiSerializationInterceptor implements NestInterceptor {
  constructor(private serializer: SerializerInterface) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.serializer.call(data)),
    );
  }
}
