const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async (client, message, args) => {
let Content = args.slice(0).join(' ')
if (!Content[0]) {
const RevengeNYKSYardım = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setColor('ORANGE')
.setTitle(`${client.user.username} Yardım Menüsü`)
.setDescription(`
${client.emojis.get('712247238075875399')} \`${ayarlar.prefix}yardım moderasyon\` **Moderasyon Menüsünü Gösterir**
${client.emojis.get('712247238075875399')} \`${ayarlar.prefix}yardım eğlence\` **Eğlence Menüsünü Gösterir**
${client.emojis.get('712247238075875399')} \`${ayarlar.prefix}yardım kullanıcı\` **Kullanıcı Menüsünü Gösterir**
`)
.setFooter(client.user.username , client.user.avatarURL)
.setTimestamp()
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
message.channel.send(RevengeNYKSYardım)
}

if (Content === 'moderasyon' || Content === '1') {
const Moderasyon = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setColor('GREEN')
.setTitle(`${client.user.username} Moderasyon Yardım Menüsü`)
.setDescription(`
${client.emojis.get('712247238075875399')}  \`${ayarlar.prefix}küfür-engel\` **Küfür Etmeyi Ayarlar**
${client.emojis.get('712247238075875399')}  \`${ayarlar.prefix}reklam-engel\` **Reklam Engellemeyi Ayarlar**
${client.emojis.get('712247238075875399')}  \`${ayarlar.prefix}rol-koruma\` **Rol Korumayı Ayarlar**
${client.emojis.get('712247238075875399')}  \`${ayarlar.prefix}mod-log\` **Mod Log Kanalını Belirler**
${client.emojis.get('712247238075875399')}  \`${ayarlar.prefix}sunucu-temizle\` **BOT Sunucuyu Sıfırlar**

`)
.setFooter(client.user.username , client.user.avatarURL)
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
message.channel.send(Moderasyon)
}

if (Content === 'eğlence' || Content === '2') {
const Eğlence = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setColor('GREEN')
.setTitle(`${client.user.username} Eğlence Yardım Menüsü`)
.setDescription(`
${client.emojis.get('712247238075875399')} \`${ayarlar.prefix}çiz\` **Resim Çizmece**`)
.setFooter(client.user.username , client.user.avatarURL)
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
message.channel.send(Eğlence)
}

if (Content === 'kullanıcı' || Content === '3') {
const Kullanıcı = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setTitle(`${client.user.username} Kullanıcı Yardım Menüsü`)
.setColor('GREEN')
.setDescription(`
${client.emojis.get('712247238075875399')} \`${ayarlar.prefix}ping\` **Pingini Gösterir**
`)
.setFooter(client.user.username , client.user.avatarURL)
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
message.channel.send(Kullanıcı)
}

}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["y","yardım"],
 permLevel: 0
}

exports.help = {
 name: 'Yardım',
 description: 'Yardım Menüsü',
 usage: 'yardım'
}