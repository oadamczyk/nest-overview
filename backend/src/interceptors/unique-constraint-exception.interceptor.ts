import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QueryFailedError } from 'typeorm';
import { UnprocessableException } from '../exceptions/unprocessable.exception';

const PG_UNIQUE_CONSTRAINT_VIOLATION = '23505';

@Injectable()
export class UniqueConstraintExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (
          error instanceof QueryFailedError &&
          error['code'] === PG_UNIQUE_CONSTRAINT_VIOLATION
        ) {
          throw new UnprocessableException([]);
        } else {
          throw error;
        }
      }),
    );
  }
}
