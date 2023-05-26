/*CMD
  command: 📒 My Details
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

var balance = Libs.ResourcesLib.userRes("points")

var num = Libs.ResourcesLib.userRes("num")

var cur = Bot.getProperty("cur") 

var button = [
  [
    { text: "🤓 Ping Admin", callback_data: "📞 Support" },
    { text: "➕ Deposit", callback_data: "/deposit" }
  ]
]

Api.sendMessage({
  text:
    "<b>👤 Account Summary Of</> <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a>\n\n<b>🎟 User ID</>: <code>" +
    user.telegramid +
    "</>\n\n<b>💵 Balance</>: <code>" +
    balance.value() +
    "</> <b>" +
    cur +
    "\n\n🛒 Total Netflix  A/C Buyed</>: " +
    num.value() +
    "",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: button
  }
})

