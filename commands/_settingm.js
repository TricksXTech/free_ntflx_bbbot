/*CMD
  command: /settingm
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

User.setProperty("taskalert", "❌")
var nn = User.getProperty("taskalert")
var m = User.getProperty("settingm")
  var inl = [
    [{ text: "" + nn + " Stack Added Alert", callback_data: "/settinm" }]
  ]
  var txt =  "*🌱 Configure your settings below*"
  Api.editMessageText({
    message_id: m,
    text: txt,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
