var express = require('express');
var router = express.Router();
let time = require('date-fns/formatDistanceToNow');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages,
    format: time,
  });
});

router.post('/new', (req, res) => {
  let messageText = req.body.text;
  let messageUser = req.body.user;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
