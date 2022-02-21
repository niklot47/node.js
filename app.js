const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {use} = require("express/lib/router");


const PORT = 5200;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [
    {
        firstName: 'Mykola',
        lastName: 'Kozakov',
        email: 'mk@gmailcom',
        password: '123456',
        age: '28',
        city: 'Lviv'
    },
    {
        firstName: 'Tom',
        lastName: 'Cruise',
        email: 'tc@gmail.com',
        password: '147258',
        age: '49',
        city: 'Kyiv'
    },
    {
        firstName: 'Albert ',
        lastName: 'Einstein',
        email: 'ae@ae.de',
        password: '159263',
        age: '55',
        city: 'Odessa'
    },
    {
        firstName: 'Nikola ',
        lastName: 'Tesla',
        email: 'nt@ac.dc',
        password: 'fckEdison',
        age: '99',
        city: 'Odessa'
    }
];

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/users', (req, res) => {
    res.render('users', {users});
})

app.get('/users/:userId', (req, res)=>{
    // console.log(req.params);
    const {userId} = req.params;
    res.json(users[userId-1]);
})

app.get('/users/:userId', (req, res)=>{
    console.log(req.query);
    const {age, city} = req.query;
    if (age && city) {
        console.log('q: age & city')
        res.json(users.filter(user => user.age>age).filter(user=> user.city===city));
    } else if (age) {
        console.log('q: age')
        res.json(users.filter(user => user.age>age));
    } else if (city){
        res.json(users.filter(user=> user.city===city));
        console.log('q: city')
    } else {
        console.log('wrong query')
    }
})

app.post('/login', (req, res) => {
    if (users.filter(user => user.email === req.body.email).length === 0) {
        users.push(req.body);
        // console.log(req.body);
        res.redirect('/users');
    } else {
        res.redirect('/wrongmail');
    }

})

app.get('/wrongmail', (req, res) => {
    res.render('wrongmail');
})


app.use((req, res) => {
    res.render('nf');
})

app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`)
});



