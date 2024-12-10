const express = require('express')
const path = require('path');
const app = express()

const PORT = 3000;

const mongoose = require('mongoose')
require('dotenv').config();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.render('about'); // Rendering about.ejs in the views folder
});

app.get('/projects', (req, res) => {
    res.render('projects'); // Rendering about.ejs in the views folder
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


app.listen(PORT, () =>{
    console.log('server running on port 3000')
})