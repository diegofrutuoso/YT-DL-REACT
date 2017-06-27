var React = require('react');
var YoutubeInfo = require('../services/YoutubeInfo');
var YoutubeResolutions = require('./YoutubeResolutions');
var YoutubeDownload = require('./YoutubeDownload');

var YoutubeVideo = React.createClass({
    getInitialState: function () {
        return {
            itag: 'lowest'
        }
    },
    updateResolution: function (itag) {
        this.setState({ itag: itag });
    },
    render: function () {
        var YoutubeInfo = null;

        if (this.props.youtubeInfo) {
            console.log("Entrou no info");
            YoutubeInfo = (
                <div className="panel panel-default painel-conteudo">
                    <div className="panel-body painel-conteudo">

                        <div className="row">
                            <div className="col-lg-4">
                                <img className="img-thumbnail imagem-thumb"
                                    src={this.props.youtubeInfo.thumbnail}
                                    alt="avatar" />
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <a href={this.props.youtubeInfo.link} target="_blank">
                                        <p className="titulo-thumb">{this.props.youtubeInfo.nome}</p>
                                    </a>
                                </div>
                                <div className="row">
                                    <p className="outros-thumb">
                                        Classificação: {this.props.youtubeInfo.avaliacao}
                                    </p>
                                </div>
                                <div className="row">
                                    <p className="outros-thumb">
                                        Duração: {this.props.youtubeInfo.duracao}
                                    </p>
                                </div>
                                <div className="row">
                                    <p className="outros-thumb">
                                        Publicado em: {this.props.youtubeInfo.publicado}
                                    </p>
                                </div>
                                <div className="row">
                                    <YoutubeResolutions
                                        resolucoes={this.props.youtubeInfo.resolucoes}
                                        updateResolution={this.updateResolution}
                                    />
                                </div>
                                <div className="row">
                                    <YoutubeDownload
                                        youtubeId={this.props.youtubeInfo.youtubeId}
                                        itag={this.state.itag}
                                        filename={this.props.youtubeInfo.nome}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        else {
            if (this.props.youtubeLoading == 'X') {
                console.log("Entrou no carregando");
                console.log(this.props.youtubeLoading);
                YoutubeInfo =
                    (
                        <div className="panel panel-default painel-conteudo">
                            <div className="panel-body painel-conteudo">
                                <img src="./images/LOADING.gif" className="img-rounded carregando" alt="Carregando" width="30%" height="30%" />
                            </div>
                        </div>
                    )
            }
            else {
                console.log("Não entrou em nada");
                YoutubeInfo =
                    (
                        <div className="panel panel-default painel-conteudo">
                            <div className="panel-body painel-conteudo">
                            </div>
                        </div>
                    )
            }
        }

        return YoutubeInfo;
    }
});

module.exports = YoutubeVideo;