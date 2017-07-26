'use strict';

require('./database').db;
const boom = require('boom');
const userInfo = require('./model/user-info-model');
const employee = require('./model/employee-model');

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

        this.getListEmployee = (request, reply) => {
            employee.find({email: request.params.email}, function (err, employee) {
                if (!err) {
                    reply(employee);
                } else {
                    reply(boom.notFound('missing'))
                }
            }).limit(10);
        };
    }
}

exports.default = Handler;