# Microsoft Authentication Setup Guide

## 🎯 Overview

DonutSMP requires **Microsoft authentication** to connect. This means you need:
1. A legitimate Microsoft account
2. Minecraft Java Edition purchased and linked to your Microsoft account
3. The bot will use your Microsoft credentials to authenticate

## 🔧 How Microsoft Authentication Works

When you use Microsoft authentication with the bot:

1. **Browser Authentication**: The bot will open your default web browser
2. **Microsoft Login**: You'll log in with your Microsoft account credentials
3. **Authorization**: You'll authorize the bot to access your Minecraft account
4. **Token Generation**: Microsoft provides an authentication token
5. **Connection**: The bot uses this token to connect to DonutSMP

## 📋 Prerequisites

### Required:
- ✅ Microsoft account (Outlook, Hotmail, Xbox, etc.)
- ✅ Minecraft Java Edition purchased and linked to your Microsoft account
- ✅ Web browser (Chrome, Firefox, Edge, Safari)

### Not Required:
- ❌ Mojang account (old system, now migrated to Microsoft)
- ❌ Cracked/pirated versions
- ❌ Offline mode

## 🚀 Setup Instructions

### Step 1: Verify Your Account
```bash
# First, try running the bot with Microsoft auth
node bot.js YourUsername microsoft
```

### Step 2: Browser Authentication
1. The bot will automatically open your web browser
2. Sign in with your Microsoft account
3. Authorize the application to access your Minecraft profile
4. Copy the authorization code if prompted

### Step 3: Automatic Connection
- After successful authentication, the bot connects automatically
- The authentication token is cached for future use
- No need to re-authenticate unless the token expires

## 🔒 Security Information

### What the Bot Accesses:
- ✅ Your Minecraft username and UUID
- ✅ Basic profile information
- ✅ Authentication tokens

### What the Bot CANNOT Access:
- ❌ Your Microsoft password
- ❌ Email content
- ❌ Personal files
- ❌ Other Microsoft services

### Safety Measures:
- Authentication happens through Microsoft's official OAuth
- No passwords are stored locally
- Tokens are encrypted and cached securely
- You can revoke access anytime from your Microsoft account

## 🛠️ Troubleshooting Microsoft Auth

### Common Issues:

#### 1. "Authentication Failed"
**Solution:**
- Ensure your Microsoft account has Minecraft Java Edition
- Check if your account migrated from Mojang to Microsoft
- Try logging into the official Minecraft launcher first

#### 2. "Browser Didn't Open"
**Solution:**
- Manually open: https://login.live.com
- Complete the login process
- Restart the bot

#### 3. "Invalid Credentials"
**Solution:**
- Verify your Microsoft account email/password
- Check if 2FA (Two-Factor Authentication) is enabled
- Use app-specific password if 2FA is enabled

#### 4. "No Minecraft License"
**Solution:**
- Verify Minecraft Java Edition is purchased
- Check account.microsoft.com for linked services
- Contact Microsoft support if needed

### GUI Authentication (Windows/Linux/macOS)

When using the GUI versions:
1. Select "Microsoft Account" from the dropdown
2. Click "Start Bot"
3. Follow the browser authentication popup
4. Return to the GUI after successful login

## 📱 Alternative: Using a Secondary Account

For safety, consider using a secondary Microsoft account:

1. Create a new Microsoft account
2. Purchase Minecraft Java Edition for that account
3. Use this account specifically for the bot
4. Keep your main account separate

## 🔄 Token Management

### Token Location:
- **Windows**: `%APPDATA%\mineflayer\`
- **Linux/macOS**: `~/.config/mineflayer/`

### Token Expiration:
- Tokens typically last 24-48 hours
- Bot automatically refreshes tokens when possible
- Re-authentication required when token expires

### Manual Token Reset:
```bash
# Delete cached tokens (will require re-authentication)
rm -rf ~/.config/mineflayer/
```

## ⚠️ Important Notes

- **Never share your Microsoft account credentials**
- **Use official Microsoft login pages only**
- **Check URL bar for "login.live.com"**
- **Enable 2FA for extra security**
- **Monitor your account for unauthorized access**

## 🆘 Need Help?

If you continue to have authentication issues:
1. Check the official Minecraft help: https://help.minecraft.net
2. Verify your account status: https://account.microsoft.com
3. Try the official Minecraft launcher first
4. Ensure no firewall/antivirus blocks the authentication process

---

**Remember: Microsoft authentication is required for DonutSMP. Offline mode will not work.**