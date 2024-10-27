const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));



app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'service.html'));
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
