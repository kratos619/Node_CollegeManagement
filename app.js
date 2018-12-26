const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const port = 4000;
var bodyParser = require('body-parser');
const departmentRoutes = require('./routes/department');
// parse application/x-www-form-urlencoded
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// parse application/json
app.use(bodyParser.json());

// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use(departmentRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome App"
    });
});

app.get('/home', (req, res) => {
    res.render('home', {
        title: "Welcome Home"
    });
});
mongoose
    .connect('mongodb://localhost/college_management')
    .then(result => {
        console.log('connected');
    })
    .catch(err => {
        console.log(err);
    });

app.listen(port, () => console.log(`app listening on port ${port}!`));