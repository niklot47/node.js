const express = require('express');

const app = express();
const PORT = 5200;



app.get('/welcome', (req, res)=>{
    res.send('hello!')
})

app.listen(PORT, () => {
    console.log(`Service has started on port ${PORT}`)
});

