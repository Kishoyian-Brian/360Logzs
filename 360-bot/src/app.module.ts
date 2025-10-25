import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotUpdate } from './bot.update';
import { WebhookController } from './webhook.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN || '',
      launchOptions: {
        dropPendingUpdates: true,
      },
      ...(process.env.NODE_ENV === 'production' && {
        webhook: {
          domain: process.env.WEBHOOK_URL,
          path: `/webhook/${process.env.BOT_TOKEN}`,
        },
      }),
    }),
  ],
  controllers: [AppController, WebhookController],
  providers: [AppService, BotUpdate],
})
export class AppModule {}