
const { Command } = require('discord-akairo');

class RecentCommand extends Command {
    constructor() {
        super('logs', {
            aliases: ['logs'],
            args: [
                {
                    id: 'ID'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        const embed = this.client.util
            .embed()
            .setColor("#00000")
            .setAuthor(`${message.author.tag}`)
	    .setTimestamp()
	    .addFields(
			{ name: '**!help utility**', value: 'Commands for utility section**', inline: true },
			{ name: '**!help other**', value: 'Commands for other section', inline: true },
			{ name: '**!help info**', value: 'Commands for info section', inline: true },
			{ name: '**!help moderation**', value: 'Commands for moderation section', inline: true },
			{ name: '**!help fun**', value: 'Commands for fun section', inline: true },
			{ name: '**!help interaction**', value: 'Commands for interaction section', inline: true },
			{ name: '**!help economy(coming soon)**', value: 'Commands for economy section', inline: true },
		)

module.exports = RecentCommand;
