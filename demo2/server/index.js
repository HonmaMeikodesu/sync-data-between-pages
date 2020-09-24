const path = require('path');
const express = require('express');

const app = express();
let esConn = 0;
app.use(express.static(path.join(__dirname, '../')));
app.get('/new_messages', (req, res) => {
  esConn++;
  res.set({'Content-Type': 'text/event-stream'});
  res.status(200);
  setInterval(() => {
    res.write(
      "event: new_connection" + '\n' +
      "data:" + `${esConn}` + '\n\n'
    );
  }, 1000)
  req.on('close', () => esConn--);
})

app.listen(7002);