/*CMD
  command: /write_me
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*📞 You are now in direct contact with our Administrator*
You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!
  ANSWER
  keyboard: Back
  aliases: 
CMD*/

User.setProperty("last_message", message, "text")
var text = "*Message was sended successfully you will get your reply shortly*"
var admin = "1626505310"
var points = Libs.ResourcesLib.userRes("points")
var button =
  "📒 My Details,🍃 Buy Account\n💶 Add funds,⚙ Setting\n📞 Support,📉 Statics"
Bot.sendKeyboard(button, text)
Api.sendMessage({
  chat_id: admin,
  text: message,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Reply",
          callback_data: "/reply " + user.telegramid + "₱¢" + message
        },
        { text: "From", url: "tg://user?id=" + admin }
      ]
    ]
  }
})
