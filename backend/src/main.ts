import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JsonApiHeaderValidationInterceptor } from './interceptors/json-api-header-validation.interceptor';
import { UnprocessableExceptionFilter } from './filters/unprocessable-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new JsonApiHeaderValidationInterceptor());
  app.useGlobalFilters(new UnprocessableExceptionFilter());
  await app.listen(3000);
}
bootstrap();
