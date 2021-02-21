import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UnprocessableException } from '../exceptions/unprocessable.exception';
import { ValidationError } from 'class-validator';
import JSONAPI = require('jsonapi-serializer');

@Catch(UnprocessableException)
export class UnprocessableExceptionFilter implements ExceptionFilter {
  catch(exception: UnprocessableException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const JSONAPIError = JSONAPI.Error;

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(
      new JSONAPIError(
        exception.errors.flatMap((error: ValidationError) => {
          return Object.values(error.constraints).map((constraint) => {
            return {
              source: { pointer: '/data/attributes/' + error.property },
              title: constraint,
            };
          });
        }),
      ),
    );
  }
}
