/*CMD
  command: 👤 Ref and Earn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.ReferralLib.setLinkPrefix("ref")
var reflink = Libs.ReferralLib.getLink()
var refcount = Libs.ReferralLib.getRefCount()
Bot.sendMessage(
  "💰 *Invite Users And Earn 1 POINT\n\n💹 Your Link :\n" +
    reflink +
    "\n\n🎯 You Invited : " +
    refcount +
    " Users*"
)
