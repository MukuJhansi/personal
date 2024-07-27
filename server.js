const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 443;

app.use(express.static('public'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/pic/', express.static(path.join(__dirname, 'pic')));
app.use('/video/', express.static(path.join(__dirname, 'video')));
app.use('/', express.static(path.join(__dirname, 'home')));
app.use('/html/', express.static(path.join(__dirname, 'html')));
app.use('/script/', express.static(path.join(__dirname, 'scripts')));

app.use(bodyParser.json());
app.use(cors());


// Serve the speech 2 page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 2.html'));
});

// Serve the assignment page
app.get('/assignment', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'assignment.html'));
});

// Serve the speech page
app.get('/speech', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 1.html'));
});

// Serve the DRC page
app.get('/drc', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'drc.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
