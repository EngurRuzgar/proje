const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
if (message.channel.type == 'dm') return;
const Eylem = args[0]
const Şifre = 'Flexy'
const Mesaj = args.slice(2).join(' ')
const Webhook = new Discord.WebhookClient('715433277934272605', 'lM1VVnGgX_i_H97CMXk9DacTNCZlj2Hx8WoA2vOxE41kmK1eo9CfnNDEUKvxuDmskHWD')
const GirilenŞifre = args[1]
if (Eylem === 'gönder' || GirilenŞifre === Şifre) {
message.delete()
Webhook.send(Mesaj + '\n\n**Gönderen:** '+message.author)
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['web'],
  permLevel: 4
}

exports.help = {
  name: 'WEB',
  description: 'Pingi Atar',
  usage: 'ping'
}