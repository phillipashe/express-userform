const express = require('express');
const app = express();

const userRouter = require('./routes/users');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { text: 4 });
});

app.use('/users', userRouter);

app.listen(8080);