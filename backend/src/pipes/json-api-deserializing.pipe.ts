import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import JSONAPI = require('jsonapi-serializer');

@Injectable()
export class JsonApiDeserializingPipe implements PipeTransform {
  constructor(private opts: Record<string, unknown>) {}

  transform(value: any, _: ArgumentMetadata) {
    const JSONAPIDeserializer = JSONAPI.Deserializer;
    return new JSONAPIDeserializer(this.opts).deserialize(
      value,
      function (err, body) {
        return body;
      },
    );
  }
}
