'use strict';

const hapi = require('hapi');
const boom = require('boom');
const configRoute = require('./route-config');
const handlers = require('./handlers');
const inert = require('inert');

const mHandlers = new handlers.default();
const server = new hapi.Server();

server.connection({
    port: 3000,
    host: 'localhost'
});

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(boom.notFound('missing'))
    }
});

server.route([{
    method: 'GET',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
}, {
    method: 'GET',
    path: '/api/employee',
    config: configRoute.reponseEmployee,
    handler: mHandlers.getListEmployee
}, {
    method: 'GET',
    path: '/api/employee/{email}',
    config: configRoute.reponseEmployee,
    handler: mHandlers.getEmployeeByEmail
}, {
    method: 'PUT',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
}]);

module.exports = server;