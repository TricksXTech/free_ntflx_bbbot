/*CMD
  command: /reply
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  Bot.editMessage("Cancelled", request.message.message_id)
  return
}
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Send here any message you want to send.",
  reply_markup: {
    inline_keyboard: [[{ text: "Cancel", callback_data: "/reply" }]]
  }
})
Bot.run({
  command: "/replying",
  options: {
    user: params.split("₱¢")[0],
    question: params.split("₱¢")[1],
    del: request.message.message_id
  }
})
