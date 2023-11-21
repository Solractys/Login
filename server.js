const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

// aqui é a config para o body-parser saber lidar com os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// esse banco de dados é uma simulação
const users = [
    { id: 1, username:'dezz', password: '12345'}
];

// Rota para a página inicial
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Rota para lidar com o envio do formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('Login bem-sucedido!');
    } else {
        res.send('Credenciais inválidas. Por favor, tente novamente.');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
