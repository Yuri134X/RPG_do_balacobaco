const express = require('express');
const router = express.Router();

// Mock database
const users = [];

// Cadastro de usario
router.post('/register', (req, res) => {
    const { name, email, characterName, password, confirmPassword } = req.body;

    // Basic validation
    if (!name || !email || !characterName || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Usuario cadastrado com sucesso' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'As Senhas não esta igual' });
    }

    // confirmando que o usuario existe
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'usuario existe' });
    }

    // criar um novo usuario 
    const newUser = {
        name,
        email,
        characterName,
        password // Note: In a real application, never store passwords as plain text
    };

    users.push(newUser);

    res.status(201).json({ message: 'Usuario cadastrado com suscesso', user: newUser });
});

module.exports = router;
