require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.send('About this application!');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Data received!');
});

app.put('/update', (req, res) => {
    res.send('Data updated!');
});

app.delete('/delete', (req, res) => {
    res.send('Data deleted!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
