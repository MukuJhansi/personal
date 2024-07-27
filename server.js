const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 443;

// Middleware
app.use(express.static('public'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/pic/', express.static(path.join(__dirname, 'pic')));
app.use('/video/', express.static(path.join(__dirname, 'video')));
app.use('/', express.static(path.join(__dirname, 'home')));
app.use('/html/', express.static(path.join(__dirname, 'html')));
app.use('/script/', express.static(path.join(__dirname, 'scripts')));

app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 2.html'));
});

app.get('/assignment', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'assignment.html'));
});

app.get('/speech', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 1.html'));
});

app.get('/drc', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'drc.html'));
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
