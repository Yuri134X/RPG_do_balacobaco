const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./server/routes/users');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`O Servidor esta rodando na porta http://localhost:${PORT}`);
});
