import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { JsonApiHeaderValidationInterceptor } from './interceptors/json-api-header-validation.interceptor';
import { UnprocessableExceptionFilter } from './filters/unprocessable-exception.filter';
import { UniqueConstraintExceptionInterceptor } from './interceptors/unique-constraint-exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.useGlobalInterceptors(
    new JsonApiHeaderValidationInterceptor(),
    new UniqueConstraintExceptionInterceptor(),
  );
  app.useGlobalFilters(new UnprocessableExceptionFilter());
  await app.listen(3000);
}
bootstrap();
