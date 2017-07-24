var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var YoutubeHeader = React.createClass({
    getInitialState: function () {
        return {
            name: ''
        }
    },
    handleClickUrl: function () {
        
    },
    handleSubmit: function (e) {

        e.preventDefault();

    },
    render: function () {
        return (
            <div>
                <div>
                    <img src="./images/FB_LOGO.png" className="img-rounded logoFB" alt="Logo Youtube" />
                    <label className="tituloFB">Download de vídeo do Facebook</label>
                </div>
                <div className="panel panel-default painelFB">
                    <div className="panel-body painelFB">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Cole o link do vídeo</h2>
                            <div className="row">
                                <div className="form-group input-group youtubeText">
                                    <span className="input-group-addon">
                                        <Glyphicon glyph="globe" />
                                    </span>
                                    <input
                                        type="text"
                                        ref="facebookURL"
                                        className="form-horizontal tamanhoTexto"
                                        placeholder=" Ex:https://www.facebook.com/BillGates/videos/10152332454511961/"
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