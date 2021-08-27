const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping']
        });
    }

    async exec(message) {
        return message.lineReplyNoMention(`Latency : **\`${this.client.ws.ping}ms\`**`);
    }
}

module.exports = PingCommand;
