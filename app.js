const express = require('express') ;
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const ejs = require('ejs');
const { readData, writeData } = require('./utils/file.js');


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//route handlers for the home
app.get('/home', (req, res) => {
    res.render('home');
});

//api endpoint for exposing the reource
app.get('/api/v1/users', async (req, res) => {
    try {
        const data = await readData();
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
        
    }
});

mongoose.connect(uri).then(
    async () => {

        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
        console.log(`Connected to port ${PORT}`);
        });
    }
).catch((err) => {console.log(`Error: ${err}`)});
