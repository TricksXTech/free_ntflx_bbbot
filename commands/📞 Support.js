/*CMD
  command: 📞 Support
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

var buttons = [
  [{ title: "✏️ Write a message", command: "/write_me" }]]
var last_m = User.getProperty("last_message")
if (last_m) {
  Bot.sendInlineKeyboard(buttons, "📫 *Last Question* = " + last_m)
  return
}
var text = "You can send us your suggestions"
Bot.sendInlineKeyboard(buttons, text)
