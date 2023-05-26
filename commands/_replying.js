/*CMD
  command: /replying
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
  chat_id: options.user,
  text:
    "Administration Answered Your Question\n<b>__________________________</b>\n\n<b>Your Question</b> : " +
    options.question +
    "\n<b>Answer</b> : " +
    message,
  parse_mode: "html"
})
Bot.sendMessage("*Message was sended successfully*")
Api.deleteMessage({ message_id: options.del })

Api.sendMessage({
  chat_id: options.user,
  text:
    "Administration Answered Your Question\n<b>__________________________</b>\n\n<b>Your Question</b> : " +
    options.question +
    "\n<b>Answer</b> : " +
    message,
  parse_mode: "html"
})
Bot.sendMessage("*Message was sended successfully*")
Api.deleteMessage({ message_id: options.del })
