/*CMD
  command: /add_stack
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

var admin = "1626505310"
if (admin == user.telegramid) {
  var netflix = Bot.getProperty("Netflix-Account", { list: {} })
  var a = params.split(" ")[0]
  var b = params.split(" ")[1]
  netflix.list[a] = { email: a, password: b }
  Bot.setProperty("Netflix-Account", netflix, "json")
  Bot.sendMessage("Add Stack successfully")
}
