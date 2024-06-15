// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db.config');
const userRoutes = require('./routes/route');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Rotas
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
