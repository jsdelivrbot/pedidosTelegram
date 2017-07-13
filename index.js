var http = require('http');

console.log("INDEX.JS...");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('iniciado...!');
  if (response.statusCode == "200" && request.url == "/"){
    console.log("CRIANDO SERVIDOR");
    fazTudo();
  }
  response.end();
 }).listen(process.env.PORT || 5000);

 function fazTudo(){
  console.log("### CRIANDO BOT ###");
  const TelegramBot = require('node-telegram-bot-api');

  // replace the value below with the Telegram token you receive from @BotFather
  const token = '399608166:AAFaDWRvVv-QjIaFxtOvbp8qgXHQbPhfIt4';

  // Create a bot that uses 'polling' to fetch new updates
  const bot = new TelegramBot(token, {polling: true});

  // Matches "/echo [whatever]"
  bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log("MENSAGEM RECEBIDA");
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Opa... chegou uma mensagem...');
  });
   
 }