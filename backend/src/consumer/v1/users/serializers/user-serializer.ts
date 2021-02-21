import { SerializerInterface } from "../../../../serializers/serializer.interface";
import JSONAPI = require('jsonapi-serializer');
const JSONAPISerializer = JSONAPI.Serializer

export class UserSerializer implements SerializerInterface {
  call(dto) {
    console.log('users', new JSONAPISerializer("users", {
      attributes: ['email']
    }).serialize(dto));
    return new JSONAPISerializer("users", {
      attributes: ['email']
    }).serialize(dto)
  }
}