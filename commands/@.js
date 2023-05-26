/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function Generate() {
  var add = Bot.getProperty("Netflix-Account")
  var netflix = Bot.getProperty("Netflix-Account")
  if (!netflix) {
    return "nothing"
  }
  for (var index in netflix.list) {
    var a = netflix.list[index].email
    var b = netflix.list[index].password
  }
  if (!a) {
    return "nothing"
  }
  add.list[a] = Bot.setProperty("Netflix-Account", add, "json")
  return { email: a, password: b }
}
