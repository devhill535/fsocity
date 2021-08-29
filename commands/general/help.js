const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('hp', {
            aliases: ['h', 'commands', '1'],
            channel: 'guild'
        });
    }

    async exec(message) {
        const embed = this.client.util
            .embed()
            .setColor(0x7289da)
            .setTitle('HELP COMMAND');
        const prefix = message.guild.prefix;

        const commands = [
            `*The prefix is currently **\`${prefix}\`***\n`
            //`*The following commands are available, running them displays more information and parameters:* **\`config\` \`prefix\` \`help\` \`limits\` \`recent\` \`reset\`**`
        ];

        const info = [
            `**add me [{here!}](https://discord.com/api/oauth2/authorize?client_id=803650426570014730&permissions=8&scope=bot)**`,
            `**my [{Website}](http://www.fsocietybot.ml)**`,
            `**support server [{join us!}](https://discord.gg/PftVmBUr5X)**`
        ];

        embed
            .addField('security commands', '`help-security`')
            .addField('security commands', '`help-security`')
            .addField('security commands', '`help-security`')
            .addField('security commands', '`help-security`')
            .addField('info Commands', 'help-info');

        message.channel.send(embed);
    }
}

module.exports = HelpCommand;
