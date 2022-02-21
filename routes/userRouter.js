const {Router} =  require ('express');
const users = require('../db/users')

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.render('users', {users});
})

userRouter.get('/:userId', (req, res)=>{
    const {userId} = req.params;
    res.json(users[userId-1]);
})

userRouter.get('/query/:userId', (req, res) => {
    if (req.query === {}) {
        const {userId} = req.params;
        res.json(users[userId - 1]);
    } else {
        console.log(req.query);
        const {age, city} = req.query;
        if (age && city) {
            console.log('q: age & city')
            res.json(users.filter(user => user.age > age).filter(user => user.city === city));
        } else if (age) {
            console.log('q: age')
            res.json(users.filter(user => user.age > age));
        } else if (city) {
            res.json(users.filter(user => user.city === city));
            console.log('q: city')
        } else {
            console.log('wrong query')
        }
    }
})

module.exports = userRouter;