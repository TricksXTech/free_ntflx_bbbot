/*CMD
  command: /netflixex
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

//exchange
if (!params) {
  var inline = [
    [
      { text: "Confirm", callback_data: "/netflixex confirm" },
      { text: "Cancel", callback_data: "/netflixex cancel" }
    ]
  ]
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "<b>✅ Are you sure you want to buy the account</b><i> Click on the confirm button for the confirmation</i>",
    parse_mode: "html",
    reply_markup: { inline_keyboard: inline }
  })
}
//points
var points = Libs.ResourcesLib.userRes("points")
//cancel
if (params && params == "cancel") {
  var text =
  "*📨 Welcome to the buy section of the Netflix account.Here you can buy a netflix account*._Click Buy Netflix  to buy a netflix account_*Price Per account is 100 rs*"
  var buttons = [[{ text: "Netflix", callback_data: "/netflixex" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: buttons }
  })
  return
}
//confirm
if (params && params == "confirm") {
  if (2 > points.value()) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: "🏷️*You don't have enough coins to get the account.Deposit to get it.*",
      parse_mode: "markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Back", callback_data: "/netflixex cancel" }],[{text:"✅ Deposit", callback_data:"/Deposit"}]
        ]
      }
    })
    return
  }
  //generate account
  var generate = Generate()
  if (generate == "nothing") {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: "Netflix Account Sold Out.. please wait for re-stack",
      parse_mode: "markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Back", callback_data: "/netflixex cancel" }]
        ]
      }
    })
    return
  }
  if (generate) {
    //deduct points
    points.add(-2)
    var withdraw = Libs.ResourcesLib.anotherUserRes("Withdraw", "global")
    withdraw.add(1)
    Api.editMessageText({
      message_id: request.message.message_id,
      text:
        "🏷️ Account generated  Successfully\nEmail : `" +
        generate.email +
        "`\nPassword : `" +
        generate.password +
        "`",
      parse_mode: "markdown"
    })
    return
  }
}
