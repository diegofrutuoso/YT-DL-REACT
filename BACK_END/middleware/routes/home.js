module.exports = function(joi) {
    return [{
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply("Welcome").code(200);
            return;
        }
    }];
}
