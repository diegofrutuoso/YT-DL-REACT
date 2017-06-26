var axios = require('axios');

var YoutubeInfo = {
    getById: function(youtubeId){
        return axios.get('http://67.205.172.210:8080/youtubeInfo?id=' + youtubeId);
    },
};

module.exports = YoutubeInfo;