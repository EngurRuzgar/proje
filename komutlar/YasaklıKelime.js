  const Discord = require('discord.js')
  const db = require('quick.db')
  const ayarlar = require('../ayarlar.json')
  exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('**Merhaba Küfür Engel Açmak İçin `' + ayarlar.prefix +'küfür-engel aç/kapat` Yazabilirsin.**')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek.**')

  if (args[0] == 'ekle') {
  if (!args[1]) return message.channel.send('Bir Kelime Yazınız.')
  db.add(`YasakKelime_${message.guild.id}`, args[1])
  await message.channel.send('✅ **`'+ args[1] +'` Artık Yasaklı Bir Kelime.**')
  }

  if (args[0] == 'sil') {
  if (args[0] !== db.fetch(`YasakKelime_${message.guild.id}`)) return message.channel.send('Böyle Bir Kelime Zaten Yok!')
  db.delete(`YasakKelime_${message.guild.id}`, args[1])
  message.channel.send('✅ **`'+ args[0] +'` Kelimesi Silindi!**')
  }

  }
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yasaklı-kelime'],
    permLevel: 0
  }

  exports.help = {
    name: 'Yasak Kelime',
    description: 'Yasak Kelime Ekle/Sil',
    usage: 'yasaklıkelime'
  }