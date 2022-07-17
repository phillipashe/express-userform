const express = require('express');
const router = express.Router();

const users = []

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
}

const addToUserList = (req, res, next) => {
  const user = {
    name: req.body.name,
    id: users.length
  }
  users.push(user);
  next();
}

router.use(logger);

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.render('users/newUser', { abcd: 'eft' });
});

router.post('/', addToUserList, (req, res) => {
  console.log(`${req.body.name} was created!`)
  res.redirect(`/users/${users.length-1}`);
});

router.route('/:id')
  .get((req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.send(user);
  })
  .put((req, res) => {
    res.send(`Updated user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleted user ${req.params.id}`);
  })

router.param('id', (req, res, next, id) => {
  // console.log(id);
  next();
})

module.exports = router;