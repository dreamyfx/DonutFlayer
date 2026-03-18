# 🍩 DonutFlayer - DonutSMP AFK Bot

A lightweight AFK bot for DonutSMP that stays online with minimal resource usage, perfect for running on Raspberry Pi or any low-resource environment.

## ⚠️ IMPORTANT: Microsoft Authentication Required

**DonutSMP requires Microsoft authentication.** You must have a legitimate Microsoft account to connect to the server. Offline mode will not work.

## ✨ Features

- **Ultra-lightweight**: Minimal resource usage, perfect for Raspberry Pi
- **AFK Mode**: No movement, no actions, just stays connected
- **Auto-reconnect**: Automatically reconnects if disconnected (10-second intervals)
- **Cross-platform**: Works on Windows, Linux, and macOS
- **GUI & CLI**: Both graphical and command-line interfaces available
- **Microsoft Auth**: Full support for Microsoft authentication
- **Real-time logging**: Console output for all events

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ (Download from [nodejs.org](https://nodejs.org/))
- A Microsoft account with Minecraft Java Edition (required for DonutSMP)
- Read the [Microsoft Authentication Guide](MICROSOFT_AUTH_GUIDE.md)

### Installation
```bash
# Clone or download this repository
cd DonutFlayer

# Install dependencies
npm install

# Run the bot (Microsoft auth required for DonutSMP)
node bot.js YourUsername microsoft
```

## 📋 Usage

### Command Line
```bash
# Basic usage (Microsoft auth required for DonutSMP)
node bot.js YourUsername microsoft

# The bot will connect to donutsmp.net:25565
```

## 🔧 Configuration

The bot connects to:
- **Server**: `donutsmp.net`
- **Port**: `25565`
- **Version**: `1.20.4` (adjustable in code if needed)

## 🔐 Microsoft Authentication Setup

**IMPORTANT**: DonutSMP requires Microsoft authentication. Read the [Microsoft Authentication Guide](MICROSOFT_AUTH_GUIDE.md) for detailed setup instructions.

### Quick Auth Steps:
1. Run: `node bot.js YourUsername microsoft`
2. Browser will open for Microsoft login
3. Authorize the bot to access your Minecraft account
4. Bot connects automatically after authentication

## 📝 What the Bot Does

✅ **Does:**
- Connects to DonutSMP using Microsoft authentication
- Stays connected 24/7
- Responds to keep-alive packets automatically
- Logs connection status and errors
- Auto-reconnects on disconnect
- Uses minimal system resources

❌ **Does NOT:**
- Move or rotate camera
- Perform any actions
- Chat or interact
- Use pathfinding
- Have anti-AFK features (not needed, just stays connected)

## 📊 System Requirements

- **RAM**: ~50MB
- **CPU**: Minimal (any modern processor)
- **Storage**: ~100MB
- **Network**: Stable internet connection

Perfect for:
- Raspberry Pi (any model)
- VPS servers
- Home servers
- Old computers
- Always-on devices

## 🔒 Security Notes

- Never share your Microsoft account credentials
- Use application-specific passwords if available
- Keep your Node.js installation updated
- Run in a secure environment, do not expose to any open orts.

## 🐛 Troubleshooting

### Connection Issues
- Verify your Microsoft account has Minecraft access
- Check firewall settings
- Ensure port 25565 is open
- Verify server status at donutsmp.net

### Authentication Issues
- Make sure you're using Microsoft authentication (not offline)
- Check your Microsoft account credentials
- Try logging into Minecraft launcher first

### Performance Issues  
- Close unnecessary applications
- Check system resources with `top` or Task Manager

## 📄 License

MIT License - Feel free to use and modify as needed.

## ⚠️ Disclaimer

This bot is designed for legitimate AFK farming on DonutSMP. Use responsibly and follow server rules. The creators are not responsible for any server bans or issues resulting from bot usage.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the bot!

---
## To donate in game:
```/pay dreamyfx```

**Happy AFK farming! 🍩**