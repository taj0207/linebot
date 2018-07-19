var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1589511813',
  channelSecret: 'ad21947ec8cb82bb3313653feb01bebb',
  channelAccessToken: 'lQ1QGh3eCgiT8XIK3A13XyFB4dCanODUEoZS7c7xVoj2RHfoRy9lx6A8DMjYnFCrU8JBnkYJN/5X43aKOhvsOjFZc9ySWB7SoomWYfcSHNXRv9NGOQsbn1pjPtKGHFG286UndczqfH+fX5jJiuyK1AdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
