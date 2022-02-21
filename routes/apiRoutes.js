const {Router} =  require ('express');
const userRouter = require('./userRouter')
const loginRouter = require('./loginRouter')
const wrongmailRouter = require('./wrongmailRouter')

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/wrongmail', wrongmailRouter);

routes.use((req, res) => {
    res.render('nf');
})

module.exports = routes;