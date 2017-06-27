var React = require('react');
var Tooltip = require('react-bootstrap/lib/Tooltip');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var YoutubeRecomendado = React.createClass({
    render: function () {
        if (this.props.youtubeInfo) {
            var recomendacoes = this.props.youtubeInfo.relacionados.map(function (resolucao, key) {
                var tooltip = (
                    <Tooltip id="tooltip">{resolucao.nome}</Tooltip>
                );
                return (
                    <div className="col-lg-4" key={resolucao.youtubeId}>
                        <div className="imgHolder">
                            <a href={"https://http://67.205.172.210?youtubeId=" + resolucao.youtubeId}>
                                <img className="img-thumbnail imagem-thumb"
                                    src={resolucao.imagem}
                                    alt="avatar" />
                                <span>&nbsp;{resolucao.duracao}&nbsp;</span>
                            </a>
                        </div>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div className="tituloHolder">
                            <a href={"https://http://67.205.172.210?youtubeId=" + resolucao.youtubeId}>&nbsp;{resolucao.nome}</a>
                        </div>
                         </OverlayTrigger>
                        <div className="subtitulos">
                        &nbsp;{resolucao.autor}&nbsp; - &nbsp;{resolucao.visualizacoes}
                        </div>
                        <br />
                    </div>
                )
            });

            return (
                <div>
                    <div className="panel panel-default painel">
                        <h2 className="texto-recomendados"> Vídeos Recomendados:</h2>
                        <div className="panel-body painel">
                            {recomendacoes}
                        </div>
                    </div>
                </div>
            );

        }
        else {
            return null;
        }
    }
});

module.exports = YoutubeRecomendado;