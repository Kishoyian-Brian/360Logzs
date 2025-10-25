#!/bin/bash

# 🚀 Webhook Setup Script for 360-Bot
# Usage: ./set-webhook.sh <BOT_TOKEN> <YOUR_DOMAIN>

if [ $# -ne 2 ]; then
    echo "❌ Usage: ./set-webhook.sh <BOT_TOKEN> <YOUR_DOMAIN>"
    echo "Example: ./set-webhook.sh 123456789:ABCdefGHIjklMNOpqrsTUVwxyz https://your-bot.onrender.com"
    exit 1
fi

BOT_TOKEN=$1
DOMAIN=$2
WEBHOOK_URL="$DOMAIN/webhook/telegram"

echo "🔧 Setting webhook for bot..."
echo "📍 Webhook URL: $WEBHOOK_URL"

# Set webhook
RESPONSE=$(curl -s -X POST "https://api.telegram.org/bot$BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"$WEBHOOK_URL\"}")

echo "📡 Webhook Response:"
echo $RESPONSE | jq '.' 2>/dev/null || echo $RESPONSE

# Check webhook info
echo ""
echo "🔍 Checking webhook info..."
WEBHOOK_INFO=$(curl -s "https://api.telegram.org/bot$BOT_TOKEN/getWebhookInfo")
echo $WEBHOOK_INFO | jq '.' 2>/dev/null || echo $WEBHOOK_INFO

# Test health endpoint
echo ""
echo "🏥 Testing health endpoint..."
HEALTH_RESPONSE=$(curl -s "$DOMAIN/webhook/health")
echo "Health check: $HEALTH_RESPONSE"

echo ""
echo "✅ Webhook setup complete!"
echo "🤖 Your bot should now receive updates via webhook"
echo "💡 Test by sending /start to your bot"
