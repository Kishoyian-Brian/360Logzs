import { Update, Start, Ctx, Command, Action } from 'nestjs-telegraf';
import { Context, Markup } from 'telegraf';

@Update()
export class BotUpdate {
  // Runs when user presses "Start" or visits ?start=welcome
  @Start()
  async start(@Ctx() ctx: Context) {
    // Extract start payload from the command text
    const payload = ctx.message && 'text' in ctx.message 
      ? ctx.message.text.split(' ')[1] 
      : undefined;

    if (payload === 'welcome') {
      // Send welcome image with caption
      await ctx.replyWithPhoto(
        'https://i.pinimg.com/originals/75/b8/1b/75b81bbb626d99d737df0b71d05492db.png',
        {
          caption: '👋 Welcome to WIILIAM SMITH EMPIRE! Glad to have you here.\n\nThis is a beautiful welcome image for you! 🌟'
        }
      );
    } else {
      // Send regular welcome with image
      await ctx.replyWithPhoto(
        'https://i.pinimg.com/originals/75/b8/1b/75b81bbb626d99d737df0b71d05492db.png',
        {
          caption: `👋 Hello ${ctx.from?.first_name || 'there'}!\nWelcome to WILLIAM SMITH EMPIRE 😊\nUse /help to see what I can do.\n\n📘 Here is a list of our available products:\n\n` +
        `/CashApp - View CashApp offers\n` +
        `/Paypal - View PayPal offers\n` +
        `/ChimeBank - View Chime Bank details\n` +
        `/WellsFargo - View Wells Fargo info\n` +
        `/Huntington - View Huntington Bank deals\n` +
        `/ChaseBank - View Chase Bank options\n` +                                                                                                                                                                                                                                                                                                          
        `/BankofAmerica - View BOA offers\n` +
        `/CoinBase - View CoinBase details\n` +
        `/WoodforestBank - View Woodforest Bank offers`
        }
        
      );
    }
  }

  @Command('CashApp')
  async cashApp(@Ctx() ctx: Context) {
    const cashAppUrl = process.env.CASHAPP_URL || 'https://360Logzs.shop/cashapp.html'
    
    // Create a web app button that opens the tool directly in Telegram
    const cashAppKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', cashAppUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const cashAppMessage = `💳 **CASH APP Logs** 💳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Premium Features**
🔐 **Secure Transactions**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Cash app BTC enable, fully verified, email access, max transcation limit per day is high
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• Instant money transfers
• Higher transaction limits  
• Priority customer support
• Advanced security features
• Business tools included

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://i.pinimg.com/originals/c5/d1/ab/c5d1ab5db9fb913510763b05cc85241c.png',
      {
        caption: cashAppMessage,
        parse_mode: 'Markdown',
        ...cashAppKeyboard
      }
    );
  }
  

  @Command('Paypal')
  async paypal(@Ctx() ctx: Context) {
    const paypalUrl = process.env.PAYPAL_URL || 'https://360Logzs.shop/paypal.html'
    
    // Create a web app button that opens the tool directly in Telegram
    const cashAppKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', paypalUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const cashAppMessage = `💳 **CASH APP Logs** 💳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Premium Features**
🔐 **Secure Transactions**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Cash app BTC enable, fully verified, email access, max transcation limit per day is high
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• Instant money transfers
• Higher transaction limits  
• Priority customer support
• Advanced security features
• Business tools included

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://www.paypalobjects.com/marketing/web23/us/en/ppe/add-cash/split-section-3-size-all-v2.jpg',
      {
        caption: cashAppMessage,
        parse_mode: 'Markdown',
        ...cashAppKeyboard
      }
    );
  }

  @Action('back_to_menu')
  async backToMenu(@Ctx() ctx: Context) {
    await ctx.answerCbQuery('🔙 Returning to main menu...');
    await this.start(ctx);
  }
}



