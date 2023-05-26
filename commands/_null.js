/*CMD
  command: /null
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
  text:"Deposit system is currently off by Admin", 
  callback_query_id: request.id,
  show_alert: true // or false - for alert on top
}) 
