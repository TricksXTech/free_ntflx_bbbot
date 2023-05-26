/*CMD
  command: /funds
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💶 add funds
CMD*/

var tto = `*👋 Welcome!*
Here You Can Add Funds To Your Balance!

*➕ Select Deposit Method,* All deposits will be converted to *NFX*`
var inl = [
  [{ text: "♻️ TRX", callback_data: "/null" }]
  ]
if (request.message_id) {
Api.sendMessage({
  text: tto,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: inl
  }
})
return
}
Api.editMessageText({
    message_id: request.message.message_id,
    text: tto, 
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
