/*CMD
  command: /totalstocks
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

Api.answerCallbackQuery({
  text:"🎟️ Total stocks added: 10\n💻 Bot Name: "+bot.name+"\n✨ Unique ID: "+user.id+"", 
  callback_query_id: request.id,
  show_alert: true // or false - for alert on top
}) 
