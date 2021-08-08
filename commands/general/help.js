const Discord = require('discord.js');

module.exports = {
	name: "h",
	description: "Help command default prefix (!)",
	aliases: ['commands', 'bothelp', 'botinfo'],
	cooldown: 1,
	execute(message, args){
		const helpEmbed = new Discord.MessageEmbed()
		.setTitle('List of all my commands!')
		.setThumbnail(message.author.displayAvatarURL({ dyanmic: true }))
        .setAuthor(`${message.author.tag}`)
		.setColor('RANDOM')
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
		message.channel.send(helpEmbed)
	}
}
