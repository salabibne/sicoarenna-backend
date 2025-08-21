import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
   origin: [
    'https://sicoarena.onrender.com', // deployed frontend
    'http://localhost:5173',          // local dev (Vite/React)
  ],
  });
  await app.listen(3000);
}
bootstrap();
