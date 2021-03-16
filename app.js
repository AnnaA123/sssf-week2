'use strict';
const express = require('express');
const catRoute = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute.js');
const app = express();
const port = 3000;

app.use(express.static('week2_public_html'));

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
