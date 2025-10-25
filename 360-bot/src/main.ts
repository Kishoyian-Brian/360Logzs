import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configure webhook for production
  if (process.env.NODE_ENV === 'production') {
    const webhookUrl = `${process.env.WEBHOOK_URL}/webhook/${process.env.BOT_TOKEN}`;
    // Webhook will be set automatically by the TelegrafModule
    console.log(`Webhook URL configured: ${webhookUrl}`);
  }
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
