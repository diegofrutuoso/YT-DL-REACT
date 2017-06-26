var axios = require('axios');

var YoutubeInfo = {
    getById: function(youtubeId){
        return axios.get('http://127.0.0.1:8080/youtubeInfo?id=' + youtubeId);
    },
};

module.exports = YoutubeInfo;