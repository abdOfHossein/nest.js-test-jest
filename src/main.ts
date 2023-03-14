import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port=3000
  const config = new DocumentBuilder()
      .setTitle('Test Nest.js With Jest')
      .setDescription('Test Nest.js With Jest')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.listen(port,()=>{
    console.log(`Server Is Running On Port :${port}`)
  });
}
bootstrap();
