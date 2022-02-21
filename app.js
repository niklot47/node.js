const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');


const PORT = 5200;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [
    {userId: 1,login: "Bogdan", age: 22, city: "Odessa", password: '1234'},
    {userId: 2,login: "Stepan", age: 26, city: "Lviv", password: '1234'},
    {userId: 3,login: "Olena", age: 26, city: "Dnipro", password: '1234'},
    {userId: 4,login: "Roman", age: 32, city: "Kyiv", password: '1234'},
    {userId: 5,login: "Andrii", age: 22, city: "Lviv", password: '1234'},
    {userId: 6,login: "Pavlo", age: 41, city: "Lviv", password: '1234'},
    {userId: 7,login: "Taniy", age: 24, city: "Odessa", password: '1234'},
    {userId: 8,login: "Iryna", age: 25, city: "Kyiv", password: '1234'},
    {userId: 9,login: "Ostap", age: 29, city: "Kharkiv", password: '1234'},
    {userId: 10,login: "Polina", age: 22, city: "Kyiv", password: '1234'},
    {userId: 11,login: "Ivan", age: 22, city: "Odessa", password: '1234'},
    {userId: 12,login: "Oleg", age: 26, city: "Rivno", password: '1234'},
    {userId: 13,login: "Volodymyr", age: 26, city: "Dnipro", password: '1234'},
    {userId: 14,login: "Taras", age: 32, city: "Poltava", password: '1234'},
    {userId: 15,login: "Alina", age: 22, city: "Lviv", password: '1234'},
    {userId: 16,login: "Veronika", age: 41, city: "Poltava", password: '1234'},
    {userId: 17,login: "Stepan", age: 24, city: "Rivno", password: '1234'},
    {userId: 18,login: "Iryna", age: 25, city: "Odessa", password: '1234'},
    {userId: 19,login: "Pavlo", age: 29, city: "Kharkiv", password: '1234'},
    {userId: 20,login: "Karolina", age: 22, city: "Odessa", password: '1234'}
];

app.get('/login', (req, res)=>{
    res.render('login');
})

app.get('/users', (req, res)=>{
    res.render('users', {users});
})

// app.get('/users/:userId', (req, res)=>{
//     console.log(req.params);
//     const {userId} = req.params;
//     res.json(users[userId]);
// })

app.get('/users/:userId', (req, res)=>{
    console.log(req.query);
    const {userId} = req.params;
    res.json(users[userId]);
})

app.post('/login', (req, res)=>{
    users.push(req.body);
    res.redirect('/users');
})

app.use((req, res)=>{
    res.render('nf');
})

app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`)
});



