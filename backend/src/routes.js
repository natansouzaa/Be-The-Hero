const express = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login de ongs ja existentes
routes.post('/sessions', sessionController.create);

//Cadastro de novas ongs
routes.post('/ongs', ongController.create);
//Listagem das ongs cadastradas
routes.get('/ongs', ongController.index);

//Listagem dos casos especificos de uma ong
routes.get('/profile', profileController.index);

//Cadastro de um novo caso
routes.post('/incidents', incidentController.create);
//Lista de todos os casos
routes.get('/incidents', incidentController.index);
//Deletar de um caso
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;