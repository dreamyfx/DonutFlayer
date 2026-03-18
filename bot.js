//
// https://github.com/dreamyfx/DonutFlayer
//
// https://gitlab.com/dreamyfx/DonutFlayer
//
// Filip Jevtic 2026 3rd March
//

const mineflayer = require('mineflayer');

// Configuration
const config = {
    host: 'donutsmp.net',
    port: 25565,
    username: process.argv[2] || 'AFKBot',
    auth: process.argv[3] || 'microsoft', // DonutSMP requires Microsoft authentication
    version: '1.21.4', // Adjust based on server version
    reconnectDelay: 10000 // 10 seconds
};

let bot = null;
let reconnectTimer = null;

function createBot() {
    console.log(`[${getTimestamp()}] Connecting to ${config.host}:${config.port} as ${config.username}...`);
    
    bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        auth: config.auth,
        version: config.version
    });

    // Bot spawned successfully
    bot.on('spawn', () => {
        console.log(`[${getTimestamp()}] Bot spawned and connected to the server!`);
        console.log(`[${getTimestamp()}] Bot is now AFK. No movement or actions will be performed.`);
        
        // Clear any existing reconnect timer since we're connected
        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = null;
        }
    });

    // Bot got kicked
    bot.on('kicked', (reason) => {
        console.log(`[${getTimestamp()}] Bot was kicked: ${reason}`);
        handleDisconnect();
    });

    // Bot disconnected
    bot.on('end', () => {
        console.log(`[${getTimestamp()}] Bot disconnected from server`);
        handleDisconnect();
    });

    // Error occurred
    bot.on('error', (err) => {
        console.error(`[${getTimestamp()}] Bot error:`, err);
        handleDisconnect();
    });

    // Prevent any movement or actions
    bot.on('move', () => {
        // Reset position to prevent movement
        if (bot.entity) {
            bot.entity.position = bot.entity.position;
        }
    });

    // Disable physics to prevent any movement
    bot.on('spawn', () => {
        bot.physicsEnabled = false;
    });
}

function handleDisconnect() {
    if (bot) {
        bot.end();
        bot = null;
    }
    
    console.log(`[${getTimestamp()}] Reconnecting in ${config.reconnectDelay/1000} seconds...`);
    
    // Set reconnect timer
    if (!reconnectTimer) {
        reconnectTimer = setTimeout(() => {
            reconnectTimer = null;
            createBot();
        }, config.reconnectDelay);
    }
}

function getTimestamp() {
    return new Date().toLocaleTimeString();
}

// Handle process termination
process.on('SIGINT', () => {
    console.log(`\n[${getTimestamp()}] Shutting down bot...`);
    if (reconnectTimer) {
        clearTimeout(reconnectTimer);
    }
    if (bot) {
        bot.end();
    }
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log(`\n[${getTimestamp()}] Shutting down bot...`);
    if (reconnectTimer) {
        clearTimeout(reconnectTimer);
    }
    if (bot) {
        bot.end();
    }
    process.exit(0);
});

// Start the bot
console.log(`[${getTimestamp()}] DonutSMP AFK Bot starting...`);
console.log(`[${getTimestamp()}] Usage: node bot.js [username] [auth-type]`);
console.log(`[${getTimestamp()}] Auth types: microsoft (required for DonutSMP)`);
console.log(`[${getTimestamp()}] Example: node bot.js MyBot microsoft`);
console.log('');

createBot();