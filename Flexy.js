const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const ayarlar = require('./ayarlar.json')
const Sahipler = require('./ayarlar.json')
const db = require('quick.db')
require('./util/eventLoader')(client)
// 7-24 Aktiflik İçin
const express = require('express')
const app = express()
const http = require('http')
app.get('/', (request, response) => {
console.log('BOT\'unuz ??? Adlı Kullanıcı Tarafından Hostlandı Yani 7/24 Aktif Edildi. ( Teşekküre Gerek Yok 😊 ) ')
response.sendStatus(200)
})
app.listen(process.env.PORT)
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
}, 280000)
const Log = message => {
console.log(`[ »» ] ${message}`)
}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err)
  Log(`${files.length} Komut Yüklenecek.`)
  files.forEach(f => {
    let props = require(`./komutlar/${f}`)
    Log(`Yüklenen Komut: ${props.help.name}.`)
    client.commands.set(props.help.name, props)
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name)
    })
  })
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]
      let cmd = require(`./komutlar/${command}`)
      client.commands.delete(command)
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias)
      })
      client.commands.set(command, cmd)
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name)
      })
      resolve();
    } catch (e) {
      reject(e);
    }
  })
}

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`)
      client.commands.set(command, cmd)
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      })
      resolve();
    } catch (e) {
      reject(e);
    }
  })
}

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]
      let cmd = require(`./komutlar/${command}`)
      client.commands.delete(command)
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      })
      resolve();
    } catch (e) {
      reject(e);
    }
  })
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ // Komutlar Burdan Aşşa \\ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \\
client.on('guildCreate', guild => {
guild.owner.send(`
**Beni Sunucunuza Eklediğiniz İçin Teşekkürler!**
**Sunucunuzu Güvenliği Ve Eğlencesi İçin Size En İyi Şekilde Yardım Edeceğim.**

❓ **Eğer Herhangi Bir Sıkıntı Olursa Destek Sunucumuza Gelmekten Çekinme!** 
https://discord.gg/ht7mzRy **\`(Bu Mesaj Sadece Sana Gönderildi)\`**`)
const Hook = new Discord.WebhookClient('710794298475675759', 'y367ZWCWF-Qx80ndJUfg0Za19SbybmXdTuidH2DhlJaOFNjwRkXi4uPmNszfMvw4lgq8')
Hook.send('`'+ guild.name +'` Adlı Sunucuya Eklendim. Sunucuda `'+ guild.memberCount + '` Kişi Var! Sunucu Sahibinin Kullanıcı Adı `'+ guild.owner +'`')
})

client.on('message', async message => {
if (message.channel.type == 'dm') { 
client.channels.get('710790932773208134').setName('👤 | '+ message.author.username)
if (message.author.id === client.user.id) return client.channels.get('710790932773208134').setName('👤 | Discord API')
}})

client.on('roleDelete', async(role , channel , message , guild) => {
const Revenge = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(Qenszo => Qenszo.entries.first())
const NYKS = await role.guild.members.get(Revenge.executor.id)
let RolKoruması = await db.fetch(`RolKoruma_${role.guild.id}`)
if (RolKoruması == 'Aktif') {
role.guild.createRole({name: role.name, color: role.color,  permissions: role.permissions}) 
if (db.fetch(`Bilgilendirme_${role.guild.id}`) === 'Açık') return role.guild.owner.send(`**${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum || Silen Kişi ${NYKS}`)
}})

client.on('message', async message => {
    if (message.channel.type == 'dm') return;
    const Çıldırıcam = client.emojis.get("685814919504986122")
    let X = db.fetch(`Küfür_${message.guild.id}`)
    if (X == 'Açık') {
    const Küfür = ['KüfürEngellemeListesi']
    if (Küfür.some(Kelime => message.content.includes(Kelime))) 
    try {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.delete(1000)
    client.channels.get('710790736701816842').setName('👤 | '+ message.author.username)
    const Embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(message.author+' **Bu Sunucuda Küfür Edemezsin.**')
    .setColor('BLUE')
    await message.channel.send(Embed).then(message => message.delete(5000))
}} catch(err) {
    console.log(err)
}}
    else if (X == 'Kapalı') 
    if (!X) return;
})

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.author.id === client.user.id) return;
const bilgi = new Discord.RichEmbed()
.setAuthor('Bilgi Öğrenmek İçin Etiketledin Beni Sanırım.')
.setColor('BLUE')
.setDescription('Ana Bilgi: Prefixim `'+ ayarlar.prefix + '` Anladınmı?')
.addField('Yardım Komutu Nedir?','Yardım Komutumuz `'+ayarlar.prefix+'yardım`')
.addField('Verilerimizi Sıfırlamanız Mümkün Olurmu?','Tabiki! Verilerinizi Sıfırlamak İçin Bize Ulaşmanız Yeterli!')
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
.setFooter('Yeni Komutlar Gelecektir Beklemede Kalın.')
.setTimestamp()
if(message.content.includes("<@!"+ client.user.id + ">")){
message.channel.send(bilgi)
}})

/*
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.author.id === client.user.id) return;
const bilg = new Discord.RichEmbed()
.setAuthor('Bot Sahibini Etikelediğine Göre Yardım Lazım.')
.setDescription('Ana Bilgi: Botun Prefixi /`'+ ayarlar.prefix + '`/ dır.')
.addField('Bozuk Kodları Nasıl Bildiririm?','Bozuk Kodları '+ayarlar.prefix+'hatabildir Komutu İle Bildirebilirsiniz.')
.addField('Peki, Nasıl Canlıdestek Alırım?','Canlıdestek Almak İçin '+ayarlar.prefix+'canlıdestek Komutu Kullanabilirsiniz.')
.addField('Verilerimizi Sıfırlamanız Mümkün Olurmu?','Tabiki! Verilerinizi Sıfırlamak İçin Bize Ulaşmanız Yeterli!')
.addField('» Linkler', `[Destek Sunucusu](https://discord.gg/ht7mzRy) | [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=2146958847) | [Bota Oy Ver!](https://top.gg/bot/${client.user.id})`)
.setFooter('Yeni Komutlar Gelecektir Beklemede Kalın.')
.setTimestamp()
if(message.content.includes("<@!"+ Sahipler.Rio || Sahipler.Nucceteere || Sahipler.Revenge || Sahipler.RioYan || Sahipler.NucceteereYan + ">")){
message.channel.send(bilg)
}
})
*/

/*client.on('message', async message => {
if (message.channel.type == 'dm') return console.log('Biri DM Attı')
if (message.author.bot) return;
console.log('[" '+ message.guild.name +' "] Adlı Sunucuda [" ' + message.author.username + ' "] Adlı Kullanıcı [" '+message.guild.memberCount+' "] Kişi İçinde [" '+ message.content+' "] Yazdı')
const Revenge = new Discord.WebhookClient('716303585838759976','dbpB4zX0FPWAs0GAGWcOaLOiBT5LpJqzRLPfe4hUHV-55CEYbi6af3OWIFotIbxjsTOB')
Revenge.send('**`'+ message.guild.name +' | '+ message.guild.memberCount+' ` [+] `#'+ message.channel.name +'` [+] `@'+ message.author.tag +'`: `'+ message.content +'`**')
})*/

client.on('guildMemberAdd', async member => {
const ModLog = await db.fetch(`ModLog_${member.guild.id}`)
if (ModLog === null || undefined) return;
const Revenge = new Discord.RichEmbed()
.setColor('GREEN')
.setAuthor(member.user.username,member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('Sunucuya Giriş Yaptı!')
.setDescription(`📥 **\`${member.user.username}\` Adlı Üye Sunucuya Giriş Yaptı.**
**Sunucuda \`${member.guild.memberCount}\` Kişi Oldu**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
member.guild.channels.get(ModLog).send(Revenge)
})

client.on('guildMemberRemove', async member => {
const ModLog = await db.fetch(`ModLog_${member.guild.id}`)
if (ModLog === null || undefined) return;
const Revenge = new Discord.RichEmbed()
.setColor('RED')
.setAuthor(member.user.username,member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('Sunucudan Çıkış Yaptı!')
.setDescription(`
📤 **\`${member.user.username}\` Adlı \`"Eski"\` Üye Sunucudan Çıkış Yaptı!**
**Sunucuda \`${member.guild.memberCount}\` Kişi Kaldı**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
member.guild.channels.get(ModLog).send(Revenge)
})

client.on('messageDelete', async message => {
  if (message.channel.type == 'dm') return;
  if (message.author.bot) return;
  const Revenge = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor(message.author.tag,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setTitle('Kullanıcı Mesajını Sildi')
  .setDescription(`🧹 **\`${message.author.username}\` Adlı Kullanıcı, ${message.channel} Kanalından Mesajını Sildi!**`)
  .addField('Silinen Mesaj', '```ini\n[" '+ message.content +' "]```')
  .setFooter(client.user.username,client.user.avatarURL)
  .setTimestamp()
  const ModLog = await db.fetch(`ModLog_${message.guild.id}`)
  if (ModLog === null || undefined) return;
  message.guild.channels.get(ModLog).send(Revenge)
  })

client.on('messageUpdate', async (EskiMesaj, YeniMesaj) => {
if (EskiMesaj.channel.type == 'dm') return;
if (EskiMesaj.author.bot) return;
const ModLog = await db.fetch(`ModLog_${EskiMesaj.guild.id}`)
if (ModLog === null || undefined) return;
const UHhh = new Discord.RichEmbed()
.setColor('ORANGE')
.setAuthor(EskiMesaj.author.tag,EskiMesaj.author.avatarURL)
.setTitle('Kullanıcı Mesajını Düzenledi')
.setDescription('📝 '+EskiMesaj.author+' **Adlı Üye <#'+ EskiMesaj.channel.id +'> Kanalındaki Mesajını Düzenledi!**')
.addField('Eski Mesaj', '```bash\n"'+ EskiMesaj.content +'"```')
.addField('Yeni Mesaj', '```bash\n"'+ YeniMesaj.content +'"```')
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
EskiMesaj.guild.channels.get(ModLog).send(UHhh)
})

client.on('channelDelete', async channel => {
if (channel.type == 'dm') return;
const Revenge = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(Hoba => Hoba.entries.first())
const NYKS = await channel.guild.members.get(Revenge.executor.id)

if (!channel.guild) return;
  if (channel.type === 'text') {
  const uh= new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
  .setThumbnail(NYKS.user.avatarURL)
  .setTitle('Bir Kanal Oluşturuldu')
  .setDescription(`🚫 **${NYKS} Adlı Kullanıcı \`${channel.name}\` Kanalını Sildi! 
__(Yazı Kanalı)__**`)
  .addField('Silinen Kanal', '```#'+ channel.name +' | Kanal ID: '+ channel.id +'```')
  .setFooter(client.user.username,client.user.avatarURL)
  .setTimestamp()
  const ModLog = db.fetch(`ModLog_${channel.guild.id}`)
  if (ModLog === null || undefined) return;
  channel.guild.channels.get(ModLog).send(uh)
  }
  if (channel.type === 'voice') {
  const uhh = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
  .setThumbnail(NYKS.user.avatarURL)
  .setTitle('Bir Kanal Oluşturuldu')
  .setDescription(`🚫 **${NYKS} Adlı Kullanıcı \`${channel.name}\` Kanalını Sildi! 
__(Ses Kanalı)__**`)
  .addField('Silinen Kanal', '```'+ channel.name +' | Kanal ID: '+ channel.id +'```')
  .setFooter(client.user.username,client.user.avatarURL)
  .setTimestamp()
  const ModLog = db.fetch(`ModLog_${channel.guild.id}`)
  if (ModLog === null || undefined) return;
  channel.guild.channels.get(ModLog).send(uhh)
  }})

client.on('channelCreate', async channel => {
  if (channel.type == 'dm') return;
  const Revenge = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await channel.guild.members.get(Revenge.executor.id)

  if (!channel.guild) return;
  if (channel.type === 'text') {
  const L = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
  .setThumbnail(NYKS.user.avatarURL)
  .setTitle('Bir Kanal Oluşturuldu')
  .setDescription(`✅ **${NYKS} Adlı Kullanıcı ${channel} Kanalını Oluşturdu! 
__(Yazı Kanalı)__**`)
  .addField('Oluşturulan Kanal', '```#'+ channel.name +' | Kanal ID: '+ channel.id +'```')
  .setFooter(client.user.username,client.user.avatarURL)
  .setTimestamp()
   const ModLog = db.fetch(`ModLog_${channel.guild.id}`)
  if (ModLog === null || undefined) return;
  channel.guild.channels.get(ModLog).send(L)
  }
  if (channel.type === 'voice') {
  const uhhhh = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
  .setThumbnail(NYKS.user.avatarURL)
  .setTitle('Bir Kanal Oluşturuldu')
  .setDescription(`✅ **${NYKS} Adlı Kullanıcı \`${channel.name}\` Kanalını Oluşturdu! 
__(Ses Kanalı)__**`)
  .addField('Oluşturulan Kanal', '```'+ channel.name +' | Kanal ID: '+ channel.id +'```')
  .setFooter(client.user.username,client.user.avatarURL)
  .setTimestamp()
  const ModLog = db.fetch(`ModLog_${channel.guild.id}`)
  if (ModLog === null || undefined) return;
  channel.guild.channels.get(ModLog).send(uhhhh)
  }
  })

client.on('guildBanAdd', async (guild, member) => {
  const Revenge = await guild.fetchAuditLogs({ type: 'GUILD_BAN_ADD' }).then(Hoba => Hoba.entries.first())
  const NYKS = await guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${guild.id}`)
  if (ModLog === null || undefined) return;
const RevengeNYKS = new Discord.RichEmbed()
.setColor('RED')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(NYKS.user.avatarURL)
.setTitle('Bir Üye Sunucudan Uzaklaştırıldı')
.setDescription(`⛔ **${NYKS} Adlı Yetkili \`${guild.name}\` Adlı Sunucudan Bir Üyeyi Uzaklaştırıldı!**`)
.addField(`**Uzaklaştırılan Kullanıcı: \`${member.tag}\`**`, `**Uzaklaştırılan Kullanıcının ID'si: \`${member.id}\`**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
guild.channels.get(ModLog).send(RevengeNYKS)
})

client.on('roleDelete', async role => {
  const Revenge = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await role.guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${role.guild.id}`)
  if (ModLog === null || undefined) return;
const MalBerlin = new Discord.RichEmbed()
.setColor('RED')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(NYKS.user.avatarURL)
.setTitle('Bir Rol Silindi')
.setDescription(`🚫 **${NYKS} Adlı Yetkili \`${role.name}\` Adlı Rolü Sildi!**`)
.addField('İşte Bilgiler',`Rolü Silen Kişi: ${NYKS} Silinen Rol: \`${role.name}\` | Silinen Rolün ID'si: \`${role.id}\``)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
role.guild.channels.get(ModLog).send(MalBerlin)
})

client.on('roleCreate', async role => {
  const Revenge = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await role.guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${role.guild.id}`)
  if (ModLog === null || undefined) return;
const Berlin = new Discord.RichEmbed()
.setColor('GREEN')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(NYKS.user.avatarURL)
.setTitle('Bir Rol Oluşturuldu')
.setDescription(`✅ **${NYKS} Adlı Yetkili \`${role.name}\` Adlı Rolü Oluşturdu**`)
.addField('İşte Bilgiler',`Rolü Oluşturan Kişi: ${NYKS} Oluşturulan Rol: \`${role.name}\` | Oluşturulan Rolün ID'si: \`${role.id}\``)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
role.guild.channels.get(ModLog).send(Berlin)
})

client.on('emojiCreate', async emoji => {
  const Revenge = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_CREATE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await emoji.guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${emoji.guild.id}`)
  if (ModLog === null || undefined) return;
const Berlin = new Discord.RichEmbed()
.setColor('GREEN')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(emoji.url)
.setTitle('Bir Emoji Oluşturuldu')
.setDescription(`✅ **${NYKS} Adlı Yetkili \`${emoji.name}\` Adlı Emojiyi Ekledi!**`)
.addField('İşte Bilgiler',`**Emojiyi Oluşturan Kişi: ${NYKS} Emojinin Resmi: ${emoji} | Emojinin Adı: \`${emoji.name}\` | Emojinin ID'si: \`${emoji.id}\`**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
emoji.guild.channels.get(ModLog).send(Berlin)
})

client.on('emojiDelete', async emoji => {
  const Revenge = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_DELETE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await emoji.guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${emoji.guild.id}`)
  if (ModLog === null || undefined) return;
const MBerlin = new Discord.RichEmbed()
.setColor('RED')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(emoji.url)
.setTitle('Bir Emoji Silindi')
.setDescription(`🚫 **${NYKS} Adlı Yetkili \`${emoji.name}\` Adlı Emojiyi Sildi!**`)
.addField('İşte Bilgiler',`**Emojiyi Silen Kişi: ${NYKS},Emojinin Adı: \`${emoji.name}\` | Emojinin ID'si: \`${emoji.id}\`**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
emoji.guild.channels.get(ModLog).send(MBerlin)
})

client.on('roleUpdate', async (EskiRol, YeniRol) => {
  const Revenge = await EskiRol.guild.fetchAuditLogs({ type: 'ROLE_UPDATE' }).then(Hoba => Hoba.entries.first())
  const NYKS = await EskiRol.guild.members.get(Revenge.executor.id)
  const ModLog = await db.fetch(`ModLog_${EskiRol.guild.id}`)
  if (ModLog === null || undefined) return;
if (EskiRol.name !== YeniRol.name) {
const Es = new Discord.RichEmbed()
.setColor('ORANGE')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(NYKS.user.avatarURL)
.setTitle('Bir Rol Güncellendi')
.setDescription(`📝 **${NYKS} Adlı Yetkili Tarafından ${EskiRol} Adlı Rol Düzenlendi.**
**Eski Rol İsmi: \`${EskiRol.name}\`**
**Yeni Rol İsmi: \`${YeniRol.name}\`**`)
.addField('**İşte Bilgiler**',`**Rolü Güncelleyen Yetkili ${NYKS} | Eski Rol: \`${EskiRol.name}\` | Eski Renk: \`#${EskiRol.color}\` | Eski İsim: \`${EskiRol.name}\`**`)
.addField('**İşte Güncellenmiş Halleri**',`**Rolü Güncelleyen Yetkili ${NYKS} | Güncellenen Rol: \`${YeniRol.name}\` | Güncellenen Renk: \`#${YeniRol.color}\` | Güncellenen İsim: \`${YeniRol.name}\`**`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
EskiRol.guild.channels.get(ModLog).send(Es)
}
if (EskiRol.name === YeniRol.name) {
const Revenge = new Discord.RichEmbed()
.setColor('ORANGE')
.setAuthor(NYKS.user.tag,NYKS.user.avatarURL)
.setThumbnail(NYKS.user.avatarURL)
.setTitle()
EskiRol.guild.channels.get(ModLog).send(Revenge)
}})

client.on('voiceStateUpdate', async (EÜye, YÜye) => {
  var ModLog = await db.fetch(`ModLog_${EÜye.guild.id}`)
  if (ModLog === null || undefined) return;
  let newUserChannel = await YÜye.voiceChannel
  let oldUserChannel = await EÜye.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    const Revenge = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(EÜye.user.username,EÜye.user.avatarURL)
    .setTitle('Bir Kullanıcı Sesli Kanala Giriş Yaptı!')
    .addField('İşte Bilgiler',`**${EÜye} Adlı Kullanıcı \`${newUserChannel.name}\` İsimli Sesli Kanala Giriş Yaptı!**`)
    .setFooter(client.user.username,client.user.avatarURL)
    .setThumbnail(EÜye.user.avatarURL)
    .setTimestamp()
    EÜye.guild.channels.get(ModLog).send(Revenge)
  } else if(newUserChannel === undefined){
    const Revenge = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(EÜye.user.username,EÜye.user.avatarURL)
    .setTitle('Bir Kullanıcı Sesli Kanaldan Çıkış Yaptı!')
    .setFooter(client.user.username,client.user.avatarURL)
    .setThumbnail(EÜye.user.avatarURL)
    .setTimestamp()
    .addField('İşte Bilgiler',`**${EÜye} Adlı Kullanıcı \`${oldUserChannel.name}\` İsimli Sesli Kanaldan Çıkış Yaptı!**`)
     EÜye.guild.channels.get(ModLog).send(Revenge)
  }})

// guildUpdate, channelUpdate, emojiUpdate

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ // Komutlar Bitti \\ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \\
client.on('message', async message => {
if (message.content === '!giriş') {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":negative_squared_cross_mark: **| Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olman Gerek.**")
client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author))
}})

client.on('message', async message => {
if (message.content === '!çıkış') {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":negative_squared_cross_mark: **| Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olman Gerek.**")
client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author))
}})

client.on('guildCreate', async guild => {
const Hook = new Discord.Webhook('710794298475675759','y367ZWCWF-Qx80ndJUfg0Za19SbybmXdTuidH2DhlJaOFNjwRkXi4uPmNszfMvw4lgq8')
const Owner = client.members.get(guild.owner.id)
Hook.send('`'+ guild.name +'` Adlı Sunucuya Eklendim. Sunucuda `'+ guild.memberCount + '` Kişi Var! Sunucu Sahibinin Kullanıcı Adı `'+ Owner.tag+'`')
})

client.on('guildDelete', async guild => {
const Hook = new Discord.Webhook('710794298475675759','y367ZWCWF-Qx80ndJUfg0Za19SbybmXdTuidH2DhlJaOFNjwRkXi4uPmNszfMvw4lgq8')
const Owner = client.members.get(guild.owner.id)
Hook.send('`'+ guild.name +'` Adlı Sunucudan Atıldım. Sunucuda `'+ guild.memberCount + '` Kişi Var! Sunucu Sahibinin Kullanıcı Adı `'+ Owner.tag+'`')
})

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission('BAN_MEMBERS')) permlvl = 2;
  if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
  if (message.author.id === Sahipler.Revenge || Sahipler.Rio || Sahipler.Nucceteere || Sahipler.RioYan || Sahipler.NucceteereYan || ayarlar.sahip) permlvl = 4;
  return permlvl;
}
client.login(ayarlar.token)