import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import type { Request, Response } from 'express';

@Controller('webhook')
export class WebhookController {
  constructor(@InjectBot() private readonly bot: Telegraf) {}

  @Post('telegram')
  async handleTelegramWebhook(@Body() body: any, @Res() res: Response) {
    try {
      await this.bot.handleUpdate(body);
      res.status(HttpStatus.OK).send('OK');
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error');
    }
  }

  @Get('health')
  healthCheck(@Res() res: Response) {
    res.status(HttpStatus.OK).json({ 
      status: 'OK', 
      message: 'Bot is running',
      timestamp: new Date().toISOString(),
      webhook_url: process.env.WEBHOOK_URL || 'Not set'
    });
  }
}
