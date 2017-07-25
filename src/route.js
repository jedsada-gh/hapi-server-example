'use strict';

const Hapi = require('hapi');
const configRoute = require('./route-config');
const handlers = require('./handlers');
const mongoose = require('mongoose');
const UserInfo = require('./model').UserInfo;

const mHandlers = new handlers.default();
const server = new Hapi.Server();

server.connection({
    port: 3000,
    host: 'localhost'
});

let db = connection()

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
        UserInfo.find({}, function (err, user) {
            if (!err) {
                reply("user");
            } else {
                reply("fdsafdsafdsafdsa"); // 500 error
            }
        });
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

function getDbOptions() {
    let options = {
        server: {
            poolSize: process.env.POOL_SIZE
        },
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
    return options
}

function connection() {
    return mongoose.createConnection(process.env.DB_URL, getDbOptions);
}