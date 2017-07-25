var axios = require('axios');

var FacebookInfo = {
    getByUrl: function(facebookUrl){
        return axios.get('http://67.205.172.210:8080/facebookInfo?url=' + facebookUrl);
    },
};

module.exports = FacebookInfo;