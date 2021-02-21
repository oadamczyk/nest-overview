import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class RequestSchemaValidationPipe implements PipeTransform {
  constructor(private schema: string) {}

  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
