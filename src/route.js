'use strict';

const hapi = require('hapi');
const boom = require('boom');
const configRoute = require('./route-config');
const handlers = require('./handlers');

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
    path: '/api/employee/{email}',
    config: configRoute.reponseEmployee,
    handler: mHandlers.getListEmployee
}, {
    method: 'DELETE',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
}, {
    method: 'PUT',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
}]);