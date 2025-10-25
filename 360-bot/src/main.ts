import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Add global error handler for unhandled rejections
    process.on('unhandledRejection', (reason, promise) => {
      console.log('Unhandled Rejection at:', promise, 'reason:', reason);
      // Don't exit the process, just log the error
    });

    process.on('uncaughtException', (error) => {
      console.log('Uncaught Exception:', error);
      // Don't exit the process, just log the error
    });
    
    // Configure webhook for production
    if (process.env.NODE_ENV === 'production') {
      const webhookUrl = `${process.env.WEBHOOK_URL}/webhook/${process.env.BOT_TOKEN}`;
      // Webhook will be set automatically by the TelegrafModule
      console.log(`Webhook URL configured: ${webhookUrl}`);
    }
    
    await app.listen(process.env.PORT ?? 3000);
    console.log('🚀 Bot started successfully!');
  } catch (error) {
    console.error('❌ Failed to start bot:', error.message);
    // Don't exit, just log and continue
    console.log('Bot will continue running...');
  }
}
bootstrap();
