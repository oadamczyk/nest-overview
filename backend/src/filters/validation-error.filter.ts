import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationError, ValidationErrorItem } from 'sequelize';

import JSONAPI = require('jsonapi-serializer');

@Catch(ValidationError)
export class ValidationErrorFilter implements ExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const JSONAPIError = JSONAPI.Error;

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(
      new JSONAPIError(
        exception.errors.map((constraint: ValidationErrorItem) => {
          return {
            source: { pointer: '/data/attributes/' + constraint.path },
            title: constraint.message,
          };
        }),
      ),
    );
  }
}
