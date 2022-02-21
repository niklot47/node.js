const {Router} =  require ('express');
const users = require('../db/users')

const wrongmailRouter = Router();

wrongmailRouter.get('/', (req, res) => {
    res.render('wrongmail');
})

module.exports = wrongmailRouter;