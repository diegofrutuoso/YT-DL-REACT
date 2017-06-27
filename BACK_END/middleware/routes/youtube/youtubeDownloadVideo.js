module.exports = function(joi) {
    return {
        method: 'GET',
        path: '/youtubeDownload/{nome}',
        handler: function(request, reply) {
            
        	const ytdl = require('ytdl-core');

            var stream = ytdl('http://www.youtube.com/watch?v='+request.query.id,{"quality": request.query.itag});

            if(request.query.itag !== 'lowest'){
                reply(null, stream).header('Accept-Ranges',' bytes')
                                   .header('Content-Disposition','attachment');            
            }
            else{
                reply(null, stream).header('Content-Type',' audio/mpeg')
                                   .header('Content-Disposition','attachment');
            }
            
            //No final
            //return;
        },
        config:{
        	validate: {
        		query: {
        			'id': joi.string().required(),
                    'itag': joi.string().required(),
        		}
        	}
        }
    };
}
