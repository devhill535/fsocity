const { Command } = require('discord-akairo');


class LoggingCommand extends Command {
    constructor() {
        super('logs2', {
            aliases: ['loggingchannel', 'logging', 'logs2'],
            args: [
                {
                    id: 'channel',
                    type: 'channel'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        const embed = this.client.util.embed().setColor(0x7289da);

        // Verify Permissions
        if (
            adminCanChangeLimits &&
            !message.member.hasPermission('ADMINISTRATOR') &&
            message.member.id !== message.guild.ownerID
        )
            return message.channel.send(
                embed.setDescription(
                    adminCanChangeLimits
                        ? "*You don't have the **`ADMINISTRATOR`** permission to do that.*"
                        : '*Only the **owner** can change the limits, as indicated in the config file.*'
                )
            );

        // Verify Input
        if (!args.channel) {
            const loggingChannel = message.guild.resolveChannel(
                message.guild.get(`loggingChannelID`)
            );

            return message.channel.send(
              
              const embed = this.client.util
            .embed()
            .setColor("#00000")
            .setTitle(
                `Recent Actions in ${message.guild.name} ${
                    args.ID
                        ? `by ${this.client.users.cache.get(args.ID).tag}`
                        : ''
                }`
            )
            .setDescription(
                `*You can do **\`${message.guild.prefix}recent <ID>\`** to view all actions relating to a user.*`
            );

        let actions = message.guild.getActions(
            10,
            args.ID
                ? i =>
                      i.executor.id === args.ID ||
                      (i.target && i.target.id === args.ID)
                : undefined
        );
        for (var k in actions)
            embed.addField(
                `${actions[k].name} (${
                    (actions[k].actions || '').split('\n').length - 1
                })`,
                actions[k].actions || 'No entries.'
            );

        message.channel.send(embed);
    }
}

              
              


module.exports = LoggingCommand;
