/*CMD
  command: /setting
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⚙ setting
CMD*/

var nn = User.getProperty("taskalert", "✅")
if (nn == "❌") {
  var inl = [[{ text: "" + nn + " Stack Added Alert", callback_data: "/settinm" }]]
} else {
  var inl = [
    [{ text: "" + nn + " Stack Added Alert", callback_data: "/settingm" }]
  ]
}
var txt =  "*🌱 Configure your settings below*"

Api.sendMessage({
  text: txt,
  on_result: "settingm",
  disable_web_page_preview: true,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: inl }
})

