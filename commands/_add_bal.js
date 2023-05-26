/*CMD
  command: /add_bal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send his User ID*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//User.setProperty('addbuser', message) 
var admin = Bot.getProperty("adminID", 1626505310)
if (user.telegramid != admin) {
  return
}
let msg = message
User.setProperty("editid", msg, "integer")
let tgid = User.getProperty("editid")
// telegramid - it is telegram id for another user
let bal = Libs.ResourcesLib.anotherUserRes("points", tgid)
Bot.sendMessage(
  "*🆔 User Id :-* " + tgid + " \n\n💰 Balance   :- " + bal.value()
)
Bot.sendMessage("🥰 *Send me Amount to add to User's Balance *")

Bot.runCommand("/add_bal2")


