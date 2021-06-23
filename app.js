const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// Middlewares
app.use(cors());

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routers/posts');
const loginRoute = require('./routers/login');
const sendsRoute = require('./routers/sends');
const docsRoute = require('./routers/docs');
const backsRoute = require('./routers/backs');

app.use('/posts', postsRoute);
app.use('/login', loginRoute);
app.use('/sends',sendsRoute);
app.use('/docs',docsRoute);
app.use('/backs',backsRoute);

// ROUTES
app.get('/',(req,res) => {
    res.send('We are on home');
});

// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,useUnifiedTopology: true },
    () => console.log('connected to DB!')
);

// How to we start lsitening to the server
app.listen(3307);