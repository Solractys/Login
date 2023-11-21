const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

// aqui é a config para o body-parser saber lidar com os dados do formulário
 app.use(bodyParser.urlencoded({extended: true}));

// esse banco de dados é uma simulação
const users = [
    { id: 1, username:'dezz', password: '12345'}
];

app.get('/login', (req, res)=> {
    res.sendFile(__dirname + '/login.html')
});

app.post('/login', (req, res)=> {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('Login bem-sucedido!');
    }
    else {
        res.send('Credenciais inválidas. Por favor, tente novamente.');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});