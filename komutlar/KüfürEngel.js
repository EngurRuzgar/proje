const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
if (!args[0]) return message.channel.send('** Merhaba Küfür Engel Açmak İçin `' + ayarlar.prefix +'küfür-engel aç/kapat` Yazabilirsin.**')
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek.**')

if (args[0] == 'aç') {
db.set(`Küfür_${message.guild.id}`, 'Açık')
message.channel.send('✅ **Küfür Filtresi Başarıyla Açıldı. `Yönetici` Yetkisi Olanları Engellemez.**')
}
  
if (args[0] == 'kapat') {
db.set(`Küfür_${message.guild.id}`,'Kapalı')
message.channel.send('✅ **Küfür Filtresi Başarıyla Kapatıldı!**')
}

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['küfür','küfürengel','küfür-engel'],
  permLevel: 0
}

exports.help = {
  name: 'Küfür Engel',
  description: 'Küfür Engel AÇ/Kapat',
  usage: 'küfür'
}