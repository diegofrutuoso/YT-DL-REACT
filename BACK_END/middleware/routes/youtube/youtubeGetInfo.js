module.exports = function (joi) {
    return {
        method: 'GET',
        path: '/youtubeInfo',
        handler: function (request, reply) {

            const ytdl = require('ytdl-core');
            var dateFormat = require('dateformat');
            var numeral = require('numeral');
            var retorno = {};

            function fancyTimeFormat(time) {
                // Hours, minutes and seconds
                var hrs = ~~(time / 3600);
                var mins = ~~((time % 3600) / 60);
                var secs = time % 60;

                // Output like "1:01" or "4:03:59" or "123:03:59"
                var ret = "";

                if (hrs > 0) {
                    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                }

                ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                ret += "" + secs;
                return ret;
            }

            ytdl.getInfo(request.query.id, function (err, info) {
                //console.log(info);

                retorno.nome = info.title;
                retorno.thumbnail = info.iurlmq;
                retorno.altThumbnail = info.thumbnail_url;
                retorno.avaliacao = numeral(info.avg_rating / 5).format('0.00%');

                retorno.duracao = numeral(info.length_seconds).format('00:00:00');

                var published = new Date(info.published);
                retorno.publicado = dateFormat(published, 'dd/mm/yyyy');
                retorno.link = 'https://www.youtube.com/watch?v=' + request.query.id;
                retorno.youtubeId = request.query.id;

                retorno.resolucoes = [];
                info.fmt_list.forEach(function (resolucao) {
                    var novaResolucao = {
                        itag: resolucao[0],
                        resolucao: resolucao[1],
                    };
                    retorno.resolucoes.push(novaResolucao);
                }, this);

                retorno.relacionados = [];

                info.related_videos.forEach(function (relacionado) {
                    var novoRelacionado = {};

                    if (relacionado.list == null) {
                        novoRelacionado = {
                            duracao: numeral(relacionado.length_seconds).format('00:00:00'),
                            nome: relacionado.title,
                            visualizacoes: relacionado.short_view_count_text,
                            autor: relacionado.author,
                            imagem: relacionado.iurlmq,
                            youtubeId: relacionado.id,
                        }
                    }
                    else{
                        novoRelacionado = {
                            qtdVideos: relacionado.playlist_length,
                            nome: relacionado.playlist_title,
                            playlistId: relacionado.list,
                            videoId: relacionado.video_id,
                            imagem: relacionado.playlist_iurlmq,
                        }
                    }
                    retorno.relacionados.push(novoRelacionado);
                });

                reply(retorno);
                return;
            });
        },
        config: {
            validate: {
                query: {
                    'id': joi.string().required(),
                }
            }
        }
    };
}
