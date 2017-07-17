const express = require('express');

var app = express();

app.get('/', (req, res) =>{
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users
// give users a name prop and age prop
app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Darren Gussin',
        age: 48
    },
    {
        name: 'Jennifer Gussin',
        age: 43
    },
    {
        name: 'Diane Gussin',
        age: 76
    }]);
});


app.listen(3000);

module.exports.app = app;