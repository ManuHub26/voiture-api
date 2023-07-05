const express = require('express');
const mongoose = require('mongoose');
const voitureRoute = require('./routes/voitureRoute');
require("dotenv").config();

const port = process.env.PORT;
const app = express();


mongoose
    .connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('[DATABASE] Connected to MongoDB'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/voiture', voitureRoute);

app.listen(port, () => console.log(`[SERVER] Le serveur écoute sur le port : ${port}`));
