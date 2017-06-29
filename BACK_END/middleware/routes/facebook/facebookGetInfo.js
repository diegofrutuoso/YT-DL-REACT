module.exports = function (joi) {
    return {
        method: 'GET',
        path: '/facebookInfo',
        handler: function (request, reply) {

            var numeral = require('numeral');
            var requestX = require('request');
            var cheerio = require('cheerio');
            var striptags = require('striptags');

            var retorno = {};

            requestX(request.query.url,
                { headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19' } },
                function (error, response, html) {

                    if (!error && response.statusCode == 200) {

                        var url = html;
                        //Pegamos o objeto correto
                        url = html.substring(html.indexOf('_53mw _4gbu'), (html.indexOf('_53mw _4gbu') + 1000));
                        url = url.substring((url.indexOf('src&quot;:&quot;') + 16), url.length);
                        url = url.substring(0, url.indexOf('&quot;'));
                        //Depois arrancamos os caracteres estranhos dele
                        url = url.split('\\/').join('/');
                        url = url.split('&amp;').join('&');

                        retorno.url = url;
                        var indiceImagem = html.indexOf('img _lt3 _4s0y');

                        var imagem = html;
                        imagem = imagem.substring(indiceImagem, indiceImagem + 400);
                        imagem = imagem.substring((imagem.indexOf('url(&quot;') + 10), imagem.length);
                        imagem = imagem.substring(0, imagem.indexOf('&quot;'));
                        imagem = imagem.split('&amp;').join('&');

                        retorno.thumbnail = imagem;

                        var indicePerfil = html.indexOf('img _4prr profpic');

                        var perfil = html;
                        perfil = perfil.substring(indicePerfil, indicePerfil + 400);
                        perfil = perfil.substring((perfil.indexOf('url(&quot;') + 10), perfil.length);
                        perfil = perfil.substring(0, perfil.indexOf('&quot;'));
                        perfil = perfil.split('&amp;').join('&');

                        retorno.fotoPerfil = perfil;

                        var nomePerfil = html;
                        var indiceNomePerfil = html.indexOf('aria-label') + 11;

                        nomePerfil = html.substring(indiceNomePerfil, indiceNomePerfil + 200);
                        nomePerfil = nomePerfil.substring(0,(nomePerfil.indexOf('role')-1));
                        nomePerfil = nomePerfil.split('"').join('');

                        retorno.nomePerfil = nomePerfil;

                        var descricao = html;
                        var indiceDescricao = html.indexOf('_5rgt _5nk5') + 12;

                        descricao = descricao.substring(indiceDescricao, indiceDescricao.length);
                        descricao = descricao.substring((descricao.indexOf('>') + 1), descricao.length);
                        descricao = descricao.substring(0,descricao.indexOf('</div>'));
                        descricao = descricao.split('&quot;').join('\"');

                        descricao = striptags(descricao);

                        retorno.descricao = descricao;

                        var Publicado = html;
                        var indicePublicado = html.indexOf('_52jc _5qc4 _24u0 _36xo') + 12;

                        Publicado = Publicado.substring(indicePublicado, indicePublicado.length);
                        Publicado = Publicado.substring((Publicado.indexOf('>') + 1), Publicado.length);
                        Publicado = Publicado.substring(0,Publicado.indexOf('</div>'));

                        Publicado = striptags(Publicado);

                        retorno.publicado = Publicado;

                        reply(retorno);
                    }
                });
        },
        config: {
            validate: {
                query: {
                    'url': joi.string().required(),
                }
            }
        }
    };
}
