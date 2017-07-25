'use strict';

class Handler {
    constructor() {
        this.getUserInfo = (request, reply) => {
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        };
    }
}

exports.default = Handler;