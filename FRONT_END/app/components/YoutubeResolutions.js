var React = require('react');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');

var YoutubeResolutions = React.createClass({
    getInitialState: function () {
        return {
            resolucaoSelecionada: ''
        }
    },
    handleSelect(eventKey) {
        this.setState({ resolucaoSelecionada: this.props.resolucoes[eventKey].resolucao });
        this.props.updateResolution(this.props.resolucoes[eventKey].itag);
    },
    render: function () {
        var resolucoes = this.props.resolucoes.map(function (resolucao, key) {
            return(
                <MenuItem key={key} eventKey={key} href={'#'}>{resolucao.itag} - {resolucao.resolucao}</MenuItem>   
            )
        });

        return (
            <div>
                <div className="dropdown" className="resol-selec">
                    <DropdownButton title="Resoluções disponíveis" id="dropdown-target" onSelect={this.handleSelect}>
                        {resolucoes}
                    </DropdownButton>
                </div>
                <div className="resol-selec">
                    <p>Selecionada: {this.state.resolucaoSelecionada}</p>
                </div>
            </div>
        );
    }
});

module.exports = YoutubeResolutions;