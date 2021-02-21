import { ValidationError } from 'class-validator';

export class UnprocessableException extends Error {
  constructor(public errors: Array<ValidationError>) {
    super('Unprocessable');
  }
}
