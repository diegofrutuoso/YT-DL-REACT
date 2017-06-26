/// Welcome to ID, Middleware code =)
'use strict';


//Config and loading server
const Hapi = require('hapi');
const server = new Hapi.Server();
const config = require('./config.json');


//config server connection
server.connection(config.connection);

//##### load modules helpers
var joi = require('joi');
var helpers = require('./helpers/helpers.js');

// server.register(require('hapi-auth-jwt2'), function(err) {

//     //To validate all applications in app include partners
//     server.auth.strategy('application', 'jwt', require('./auth/auth.Application.js'));
//     //To validate only Cloud Radio Applications
//     server.auth.strategy('in_house_application', 'jwt', require('./auth/auth.InHouseApplication.js'));
//     //user & app validation
//     server.auth.strategy('user', 'jwt', require('./auth/auth.Users.js'));
// });

//##### LOAD ALL routes from folder files using a helper because can be many files
helpers.file.eachDir('./routes/', function(f) {
    //prevent against no js files
    if (f.indexOf('js') > -1) {

        var route = require(f); //load file

        //set global functions and libs
        if (typeof route == 'function') {
            server.route(route(joi));
        } else {
            server.route(route);
        }
    }
});

//logging tool so Camillo won't kill me
server.on('response', function (request) {
    var fs = require('fs');

    var log = {
        header: request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode,
        request : request.payload,
        response : request.response.source,
    }

    if (request.method.toUpperCase() == 'POST') {

        var d = new Date();
        const util = require('util');

        var fileName = 'awesome_log' + d.getFullYear() + d.getMonth() + d.getDate();

        fs.appendFile(fileName, '\r\n header ' + log.header + ' - ' +
        d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' - ' +
        d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() +
        '\r\n request ' + util.inspect(log.request, false, null) +
        '\r\n response ' + util.inspect(request.response.source, false, null) +
        '\r\n =========================== ', function (err) {
        });

    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('\nmiddleware loadded ;) \n\nServer running at:', server.info.uri);
});
