const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 443;

app.get("/download/:filename", (req, res) => {
    const filePath = __dirname + "/media/" + req.params.filename;
    res.download(
        filePath,
        "Image.jpeg", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error: err,
                    msg: "Problem downloading the file"
                })
            }
        });
});

// Middleware
app.use(express.static('public'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/media/', express.static(path.join(__dirname, 'media')));
app.use('/', express.static(path.join(__dirname, 'home')));
app.use('/html/', express.static(path.join(__dirname, 'html')));
app.use('/script/', express.static(path.join(__dirname, 'scripts')));

app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 2.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'work.html'));
});

app.get('/assignment', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'assignment.html'));
});

app.get('/assignment2', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'assignment-2.html'));
});

app.get('/speech', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'speech - 1.html'));
});

app.get('/drc', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'drc.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'table.html'));
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
