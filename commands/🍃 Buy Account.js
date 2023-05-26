/*CMD
  command: 🍃 Buy Account
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

var points = Libs.ResourcesLib.userRes("balance")
var text =
  "*📨 Welcome to the buy section of the Netflix account.Here you can buy a netflix account*._Click Buy Netflix  to buy a netflix account_*Price Per account is 100 rs*"
var buttons = [[{ title: "🍃 Netflix", command: "/netflixex" },{ title:"🗑 Close", command:"/delete"}],[{ title:"✅ Total stocks added in Bot❓", command:"/totalstocks"}]]
Bot.sendInlineKeyboard(buttons, text)
