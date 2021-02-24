import { SerializerInterface } from '../../../serializers/serializer.interface';
import JSONAPI = require('jsonapi-serializer');
const JSONAPISerializer = JSONAPI.Serializer;

export class UserSerializer implements SerializerInterface {
  call(dto) {
    return new JSONAPISerializer('users', {
      attributes: ['email'],
    }).serialize(dto);
  }
}
