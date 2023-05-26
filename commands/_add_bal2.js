/*CMD
  command: /add_bal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("adminID", 1626505310)
if (user.telegramid != admin) {
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
  Bot.runCommand("/add_bal2")
  return
}
let amount = parseFloat(message)
let tgid = User.getProperty("editid")
let bal = Libs.ResourcesLib.anotherUserRes("points", tgid)
bal.add(amount)
Bot.sendMessage("💰Amount Added Successfully.\n\nDetails Below")
Bot.sendMessage(
  "*🆔 User Id :-* " + tgid + "\n\n*💰Amount Added:- *"+ amount + "\n\n💰 Balance   :- " + bal.value()
)
