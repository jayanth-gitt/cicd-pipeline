const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! CI/CD Pipeline Project');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        message: 'Application is running successfully'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});