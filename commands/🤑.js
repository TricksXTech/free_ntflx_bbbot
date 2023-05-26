/*CMD
  command: 🤑
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var points = Libs.ResourcesLib.userRes("points")
var button =
  "🤑 Balance : " +
  points.value().toFixed(1) +
  " Points,🎁 Daily Check-in\n 💲 Withdraw\n👤 Ref and Earn,📈 Statistics\n📞 Support"
var msg =
  "*💰 Balance : " +
  points.value().toFixed(1) +
  " Points\n\n⚜️Refer And Earn More*"
Bot.sendKeyboard(button, msg)
