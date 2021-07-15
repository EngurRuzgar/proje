module.exports = (client) => {

//  WATCHING  : !ping izliyor
//  LISTENING : !ping dinliyor
//  PLAYING   : !ping oynuyor 
//  STREAMING : !ping yayında

  client.user.setActivity(client.guilds.size +' Sunucu, '+ client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +' Kullanıcı, '+ client.commands.size +' Komut | Bizim ile Hep Daha Ileriye!',{ type: "PLAYING"} )
  client.user.setStatus('idle')
  console.log(client.user.username + " : " + client.user.presence.game)
}