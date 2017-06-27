var React = require('react');
var YoutubeInfo = require('../services/YoutubeInfo');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var YoutubeHeader = React.createClass({
    getInitialState: function () {
        return {
            name: ''
        }
    },
    handleClickUrl: function(){
        var indiceCortado = this.refs.youtubeURL.value.indexOf("?v=");
        var idCortado = this.refs.youtubeURL.value.substring(indiceCortado+3,this.refs.youtubeURL.value.length);
        indiceCortado = idCortado.indexOf("&");

        console.log(idCortado);

        if(indiceCortado > 0){
            idCortado = idCortado.substring(0,indiceCortado);
        }
        
        this.props.updateInfo(null);
        this.props.updateLoading('X');

        YoutubeInfo.getById(idCortado).then(function (response) {
            this.props.updateInfo(response.data);
            this.props.updateLoading(' ');
        }.bind(this));

        this.refs.youtubeURL.value = '';
    },
    handleSubmit: function(e){

        e.preventDefault();

        var indiceCortado = this.refs.youtubeURL.value.indexOf("?v=");
        var idCortado = this.refs.youtubeURL.value.substring(indiceCortado+3,this.refs.youtubeURL.value.length);
        indiceCortado = idCortado.indexOf("&");

        console.log(idCortado);

        if(indiceCortado > 0){
            idCortado = idCortado.substring(0,indiceCortado);
        }

        this.props.updateInfo(null);
        this.props.updateLoading('X');
        
        YoutubeInfo.getById(idCortado).then(function (response) {
            this.props.updateInfo(response.data);
            this.props.updateLoading(' ');
        }.bind(this));

        this.refs.youtubeURL.value = '';
    },
    render: function () {
        return (
            <div>
                <div>
                    <img src="./images/LOGO.png" className="img-rounded logo" alt="Logo Youtube" />
                    <label className="titulo">Download de vídeos</label>
                </div>
                <div className="panel panel-default painel">
                    <div className="panel-body painel">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Cole o link do vídeo</h2>
                            <div className="row">
                                <div className="form-group input-group youtubeText">
                                    <span className="input-group-addon">
                                        <Glyphicon glyph="globe" />
                                    </span>
                                    <input
                                        type="text"
                                        ref="youtubeURL"
                                        className="form-horizontal tamanhoTexto"
                                        placeholder=" Ex:https://youtube.com/watch?v=0JoVj6n5eZY"
                                    />
                                    <button
                                        type="button"
                                        onClick={this.handleClickUrl}
                                        className="btn btn-primary botaoBuscar">
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

module.exports = YoutubeHeader;