import { Controller, Get } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get('health')
  healthCheck() {
    return { status: 'OK', message: 'Webhook endpoint is ready' };
  }
}
