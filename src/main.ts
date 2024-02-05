import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalJwtGuard } from './guards/global-jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new GlobalJwtGuard(reflector));

  await app.listen(3000);
}
bootstrap();
