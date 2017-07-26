'use strict';

require('./database').db;
const boom = require('boom');
const userInfo = require('./user-info-model');

class Handler {
    constructor() {
        this.getUserInfo = (request, reply) => {
            userInfo.find({}, function (err, user) {
                if (!err) {
                    reply(user);
                } else {
                    reply(boom.notFound('missing'))
                }
            });
        };
    }
}

exports.default = Handler;