import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { JsonApiHeaderValidationInterceptor } from './interceptors/json-api-header-validation.interceptor';
import { ValidationErrorFilter } from './filters/validation-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.useGlobalInterceptors(new JsonApiHeaderValidationInterceptor());
  app.useGlobalFilters(new ValidationErrorFilter());
  await app.listen(3000);
}
bootstrap();
