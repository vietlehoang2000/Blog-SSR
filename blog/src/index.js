const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
var methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
// app.use(morgan('combined'))

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: function (a , b) { return a+b; }
        },
    }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
