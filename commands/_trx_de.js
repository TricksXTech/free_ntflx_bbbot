/*CMD
  command: /trx_de
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

var mes_id = request.message.message_id
var chat_id = request.message.chat.id
var cur = Bot.getProperty("cur")
function isNan(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function bon(am) {
  var bon = Bot.getProperty("dep_offer")
  if (!bon || !isNan(bon)) {
    var bon = 1
  }
  var aso = am * parseFloat(bon)
  return aso
}
var xyz = "*✋ Wait Generating Deposit Address*"

Api.editMessageCaption({
  message_id: mes_id,
  caption: xyz,
  parse_mode: "markdown",
  disable_web_page_preview: false,
  reply_markup: { inline_keyboard: buton }
})
var wallet = "TPyxwGmfNYsPjhCp1Wx9yNM442bX4MT8kW" //your trx address
if (!wallet) {
  HTTP.get({
    url: "https://txt.i-payments.site/tron/build/",
    success: "/onWalletCreate"
  })
  return
}
//var wallet = "TBMu4isd9k1mKWw8hKit2LdaAn92D1wfym" //your trx address
var xyz =
  "• ━━━━━━━━━━━━━━━━━ •\n*💳 Your Tron Deposit Address:*\n`" +
  wallet +
  "`\n• ━━━━━━━━━━━━━━━━━ •\n*✅ Send The Amount You Want To Deposit To The Above Address ^^*\n_⚠️ If You Send Less Than 1 TRX, Your Deposit would be Ignored!_\n• ━━━━━━━━━━━━━━━━━ •"

var buton = [
  [
    { text: "🔺 1 TRX = 10", callback_data: "/nulll" },
    { text: "✅ Paid ", callback_data: "/trx_dep" }
  ],
  [{ text: "↩️ Back", callback_data: "/cp_dep" }]
]
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: xyz,
  parse_mode: "markdown",
  disable_web_page_preview: false,
  reply_markup: { inline_keyboard: buton }
})

