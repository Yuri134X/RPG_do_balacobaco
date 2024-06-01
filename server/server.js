const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' }
];

app.post('/api/users/register', (req, res) => {
    const { name, email, password } = req.body;
    const id = users.length + 1;
    users.push({ id, name, email, password });
    res.json({ success: true, message: 'User registered successfully' });
});

app.listen(3000, () => {
    console.log('API listening on port 3000');
});