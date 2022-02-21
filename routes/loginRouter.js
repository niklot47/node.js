const {Router} =  require ('express');
const users = require('../db/users')

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
})

loginRouter.post('/', (req, res) => {
    if (users.filter(user => user.email === req.body.email).length === 0) {
        users.push(req.body);
        res.redirect('/users');
    } else {
        res.redirect('/wrongmail');
    }
})

module.exports = loginRouter;