'use strict';

const Hapi = require('hapi');
const configRoute = require("./route-config");
const handlers = require('./handlers');

const mHandlers = new handlers.default();
const server = new Hapi.Server();

server.connection({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
        reply('Hello, world!' + process.env.DB_URL);
    }
});

server.route([{
    method: 'GET',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
}, {
    method: 'POST',
    path: '/api/userinfo/{name}',
    config: configRoute.reponseUserInfo,
    handler: mHandlers.getUserInfo
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

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});