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

    const cashAppMessage = `💳 **PAYPAL Logs** 💳
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

  @Command('ChimeBank')
  async chimeBank(@Ctx() ctx: Context) {
    const chimeUrl = process.env.CHIME_URL || 'https://360Logzs.shop/chime.html';
    
    const chimeKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', chimeUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const chimeMessage = `🏦 **CHIME BANK LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Digital Banking Revolution**
🔐 **No-Fee Banking**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Chime digital bank account with SpotMe overdraft protection, early direct deposit, and no hidden fees. Perfect for modern banking needs.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• SpotMe overdraft protection up to $200
• Early direct deposit (2 days early)
• No monthly fees or minimum balance
• Mobile check deposit
• Free ATM withdrawals at 60,000+ locations

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://image.cnbcfm.com/api/v1/image/105451480-1536930484113chime.jpg?v=1536930522&w=1920&h=1080',
      {
        caption: chimeMessage,
        parse_mode: 'Markdown',
        ...chimeKeyboard
      }
    );
  }

  @Command('WellsFargo')
  async wellsFargo(@Ctx() ctx: Context) {
    const wellsUrl = process.env.WELLS_URL || 'https://360Logzs.shop/wells.html';
    
    const wellsKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', wellsUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const wellsMessage = `🏦 **WELLS FARGO LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Traditional Banking Power**
🔐 **Established Security**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Wells Fargo traditional banking with extensive branch network, comprehensive financial services, and established reputation for reliability.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• 4,900+ branch locations nationwide
• Comprehensive mortgage and loan services
• Investment and wealth management
• Business banking solutions
• 24/7 customer service support

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://i.pinimg.com/736x/b6/a0/86/b6a0864fe9e3d16ce9dffe36bdbc26a7.jpg',
      {
        caption: wellsMessage,
        parse_mode: 'Markdown',
        ...wellsKeyboard
      }
    );
  }

  @Command('Huntington')
  async huntington(@Ctx() ctx: Context) {
    const huntingtonUrl = process.env.HUNTINGTON_URL || 'https://360Logzs.shop/huntington.html';
    
    const huntingtonKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', huntingtonUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const huntingtonMessage = `🏦 **HUNTINGTON BANK LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Midwest Banking Excellence**
🔐 **Regional Powerhouse**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Huntington Bank offers comprehensive financial services with strong regional presence, innovative digital banking, and personalized customer service.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• 24-Hour Grace Period on overdrafts
• Huntington Voice digital assistant
• Standby Cash line of credit
• Free checking with no minimum balance
• Extensive ATM network across Midwest

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-Bxyfi_ecMl9U0aG3Y-uMOLB5CPgao8zRQ&s',
      {
        caption: huntingtonMessage,
        parse_mode: 'Markdown',
        ...huntingtonKeyboard
      }
    );
  }

  @Command('ChaseBank')
  async chaseBank(@Ctx() ctx: Context) {
    const chaseUrl = process.env.CHASE_URL || 'https://360Logzs.shop/chase.html';
    
    const chaseKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', chaseUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const chaseMessage = `🏦 **CHASE BANK LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **National Banking Leader**
🔐 **JP Morgan Backed**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Chase Bank provides comprehensive financial services with nationwide presence, advanced digital banking, and premium customer experience.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• 4,700+ branches and 16,000+ ATMs
• Chase Sapphire credit card rewards
• Investment and wealth management
• Business banking with QuickDeposit
• Mobile banking with Zelle integration

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://i.pinimg.com/736x/3d/a7/77/3da7774ae1f9c26872d58e82fbb4cd6d.jpg',
      {
        caption: chaseMessage,
        parse_mode: 'Markdown',
        ...chaseKeyboard
      }
    );
  }

  @Command('BankofAmerica')
  async bankOfAmerica(@Ctx() ctx: Context) {
    const boaUrl = process.env.BOA_URL || 'https://360Logzs.shop/boa.html';
    
    const boaKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', boaUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const boaMessage = `🏦 **BANK OF AMERICA LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **America's Premier Bank**
🔐 **Global Financial Services**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Bank of America offers comprehensive financial services with global reach, innovative technology, and personalized banking solutions for all needs.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• 4,000+ financial centers nationwide
• Merrill Lynch investment services
• Preferred Rewards program benefits
• Business banking with Cash Flow Monitor
• Global banking and international services

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://i.redd.it/aymtgxffkds21.jpg',
      {
        caption: boaMessage,
        parse_mode: 'Markdown',
        ...boaKeyboard
      }
    );
  }

  @Command('CoinBase')
  async coinBase(@Ctx() ctx: Context) {
    const coinbaseUrl = process.env.COINBASE_URL || 'https://360Logzs.shop/coinbase.html';
    
    const coinbaseKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', coinbaseUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const coinbaseMessage = `₿ **COINBASE LOGS** ₿
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Crypto Trading Platform**
🔐 **Digital Asset Security**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Coinbase is the leading cryptocurrency exchange platform offering secure trading, staking rewards, and institutional-grade custody services.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• Trade 200+ cryptocurrencies
• Coinbase Earn educational rewards
• Staking rewards up to 5% APY
• Coinbase Pro advanced trading
• Institutional custody services

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://z.cash/wp-content/uploads/2023/04/coinbase.png',
      {
        caption: coinbaseMessage,
        parse_mode: 'Markdown',
        ...coinbaseKeyboard
      }
    );
  }

  @Command('WoodforestBank')
  async woodforestBank(@Ctx() ctx: Context) {
    const woodforestUrl = process.env.WOODFOREST_URL || 'https://360Logzs.shop/woodforest.html';
    
    const woodforestKeyboard = Markup.inlineKeyboard([
      [Markup.button.webApp('🛒 BUY NOW', woodforestUrl)],
      [Markup.button.callback('🔙 Back to Menu', 'back_to_menu')],
    ]);

    const woodforestMessage = `🏦 **WOODFOREST BANK LOGS** 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Community Banking Focus**
🔐 **Personalized Service**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 **DESCRIPTION:**
Woodforest Bank provides community-focused banking with personalized service, competitive rates, and commitment to local communities.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FEATURES:**
• 700+ locations in 17 states
• Free checking with no minimum balance
• Competitive mortgage and loan rates
• Community development programs
• Personalized customer service

🔗 **Click the button below to purchase:**`;

    await ctx.replyWithPhoto(
      'https://i.pinimg.com/originals/75/b8/1b/75b81bbb626d99d737df0b71d05492db.png',
      {
        caption: woodforestMessage,
        parse_mode: 'Markdown',
        ...woodforestKeyboard
      }
    );
  }

  @Action('back_to_menu')
  async backToMenu(@Ctx() ctx: Context) {
    await ctx.answerCbQuery('🔙 Returning to main menu...');
    await this.start(ctx);
  }
}



