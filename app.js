const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {use} = require("express/lib/router");
const apiRoutes = require('./routes/apiRoutes')


const PORT = 5200; //v posylanniah treba miniaty vryuchnu!!!
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`)
});



