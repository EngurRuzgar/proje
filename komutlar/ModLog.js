const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let Kanal = message.mentions.channels.first()
if (!Kanal) return message.channel.send('**Mod-Log Ayarlamam İçin Bir Kanal Etiketlemelisiniz.**')
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek.**')
db.set(`ModLog_${message.guild.id}`, Kanal.id)
message.channel.send('**Mod-Log Kanalı Başarı İle **'+Kanal+'** Olarak Ayarlanmıştır.**')
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['modlog','log','mod','mod-log'],
  permLevel: 0
}

exports.help = {
  name: 'Mod-Log Kanal',
  description: 'Mod-Log Kanal Ayarla',
  usage: 'modlog'
}