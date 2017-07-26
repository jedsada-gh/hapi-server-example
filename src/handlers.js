'use strict';

require('./database').db;
const userInfo = require('./user-info-model');

class Handler {
    constructor() {
        this.getUserInfo = (request, reply) => {
            userInfo.find({}, function (err, user) {
                if (!err) {
                    reply(user);
                } else {
                    reply("error");
                }
            });
        };
    }
}

exports.default = Handler;