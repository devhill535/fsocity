const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'help',
  aliases: ('cmds'),
  description: 'Shows you the list of commands.',
  usage: 'help',
  example: 'help',
  async execute(client, message, args) {

    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#de526")
      .setAuthor(`${client.user.username} Discord Bot\n`)
      .setDescription('• 📍 Prefix: ``' + prefix + '``\n' +
        `• 🔧 Developer: ${dev}\n\n⚙️ - **Panel**\n👮 - **Moderation**\n❔ - **Other**`);
        
     const security = new Discord.MessageEmbed()
      .setColor("#de762")
      .setAuthor(`${client.user.username} Discord Bot\n`)
      .setDescription('• 📍 Prefix: ``' + prefix + '``\n' +
        `• 🔧 Developer: ${dev}\n\n⚙️ - **Panel**\n👮 - **Moderation**\n❔ - **Other**`);

    const moderationEmbed = new Discord.MessageEmbed()
      .setColor("#de245")
      .setAuthor(`Config\n`)
      .setDescription('To get more information about a certain command, use ``' + prefix +
        'help [command]``.\n\n•``test``, ``test2``, ``test3``.');

    try {
      const filter = (reaction, user) => {
        return (reaction.emoji.name === '⚙️' || '👮' || '❔' || '📎') && user.id === message.author.id;
      };
      message.delete();
      message.channel.send(helpEmbed).then(embedMsg => {
        embedMsg.react("⚙️")
        .then(embedMsg.react("👮"))
          .then(embedMsg.react("📎"))
          .then(embedMsg.react("❔"))
        embedMsg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '⚙️') {
              embedMsg.edit(helpEmbed);
            } else if (reaction.emoji.name === '👮') {
              embedMsg.edit(moderationEmbed);
            } else if (reaction.emoji.name === '📎') {
              embedMsg.edit(security);
            } else if (reaction.emoji.name === '❔') {
              message.reply('test.');
            }
          })
          .catch(collected => {
            message.reply('didnt work.');
          });
      });


    } catch (e) {
      console.log(e.stack);
    }
  }
}
