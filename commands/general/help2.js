const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'help2',
  aliases: ('cmds'),
  description: 'Shows you the list of commands.',
  usage: 'help',
  example: 'help',
  async execute(client, message, args) {

    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#de873")
      .setAuthor(`${client.user.username} Discord Bot\n`)
      .setDescription('• 📍 Prefix: ``' + prefix + '``\n' +
        `• 🔧 Developer: ${dev}\n\n⚙️ - **Panel**\n👮 - **Moderation**\n❔ - **Other**`);
        
     const security = new Discord.MessageEmbed()
      .setColor("#de627")
      .setAuthor(`${client.user.username} Discord Bot\n`)
      .setDescription('• 📍 Prefix: ``' + prefix + '``\n' +
        `• 🔧 Developer: ${dev}\n\n⚙️ - **Panel**\n👮 - **Moderation**\n❔ - **Other**`);

    const moderationEmbed = new Discord.MessageEmbed()
      .setColor("#de536")
      .setAuthor(`Config\n`)
      .setDescription('To get more 
