import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Openapi config
  const config = new DocumentBuilder()
    .setTitle('Bebsaa REST API Doc')
    .setDescription('WEB SERVICE FOR USER MANAGEMENT')
    .setVersion('0.1.0')
    // .addTag('bebsaa')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
