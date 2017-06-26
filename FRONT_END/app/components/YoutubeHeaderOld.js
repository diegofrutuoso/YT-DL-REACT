var React = require('react');
var YoutubeInfo = require('../services/YoutubeInfo');

var YoutubeHeaderOld = React.createClass({
    handleClickId: function () {
        YoutubeInfo.getById(this.refs.youtubeID.value).then(function (response) {
            this.props.updateInfo(response.data);
        }.bind(this));
    },
    handleClickUrl: function(){
        var indiceCortado = this.refs.youtubeURL.value.indexOf("?v=");
        var idCortado = this.refs.youtubeURL.value.substring(indiceCortado+3,this.refs.youtubeURL.value.length);
        indiceCortado = idCortado.indexOf("&");

        console.log(idCortado);

        if(indiceCortado > 0){
            idCortado = idCortado.substring(0,indiceCortado);
        }
        
        YoutubeInfo.getById(idCortado).then(function (response) {
            this.props.updateInfo(response.data);
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <div>
                    <img src="./images/LOGO.png" className="img-rounded logo" alt="Logo Youtube" width="30%" height="30%" />
                    <label className="titulo">Download de vídeos</label>
                </div>
                <div className="panel panel-default painel">
                    <div className="panel-body painel">
                        <form>
                            <h2>Digite o id do vídeo</h2>
                            <div className="row">
                                <div className="form-group input-group youtubeText">
                                    <span className="input-group-addon">https://youtube.com/watch?v=</span>
                                    <input
                                        type="text"
                                        ref="youtubeID"
                                        className="form-horizontal tamanhoTexto"
                                        placeholder="Ex:0JoVj6n5eZY"
                                    />
                                    <button
                                        type="button"
                                        onClick={this.handleClickId}
                                        className="btn btn-primary botaoBuscar">
                                        Buscar
                                </button>
                                </div>
                            </div>
                            <div className="row">
                                <h1 className="ou"> - OU - </h1>
                            </div>
                            <h2>Digite a url do vídeo</h2>
                            <div className="row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        ref="youtubeURL"
                                        className="form-horizontal texto-url"
                                        placeholder="Ex:https://youtube.com/watch?v=0JoVj6n5eZY"
                                    />
                                    <button
                                        type="button"
                                        onClick={this.handleClickUrl}
                                        className="btn btn-primary botao-url">
                                        Buscar
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = YoutubeHeaderOld;