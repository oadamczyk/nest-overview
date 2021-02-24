import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import Ajv from 'ajv';
import * as fs from 'fs';
import * as util from 'util';

@Injectable()
export class RequestSchemaValidationPipe implements PipeTransform {
  constructor(private module: string, private schema: string) {}

  transform(value: any) {
    const rawSchema = fs.readFileSync(
      util.format(
        'src/modules/%s/json_schemas/%s.json',
        this.module,
        this.schema,
      ),
      'utf8',
    );
    const validate = new Ajv().compile(JSON.parse(rawSchema));
    if (!validate(value)) {
      throw new BadRequestException('REQUEST_SCHEMA.INVALID');
    }
    return value;
  }
}
