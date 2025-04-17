const express = require('express');
const path = require('path');
const app = express();

const session = require('express-session');

app.use(session({
    secret: 'secreto-super-seguro',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});



app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');

const engine = require('ejs-mate');
app.engine('ejs', engine);
app.set('views', __dirname + '/views');



app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', require('./routes/router'));

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
}
);


