const express = require('express');
const router = express.Router();

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
}

router.use(logger);

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.render('users/newUser', { abcd: 'eft' });
  // res.send('User New Form')
});

router.post('/', (req, res) => {
  res.send('Create user');
});

router.route('/:id')
  .get((req, res) => {
    res.send(`Got user ${req.params.id}`);
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