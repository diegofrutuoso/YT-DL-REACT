var React = require('react');
var YoutubeHeader = require('./YoutubeHeader');
var YoutubeVideo = require('./YoutubeVideo');
var YoutubeRecomendado = require('./YoutubeRecomendado');

var Youtube = React.createClass({
    getInitialState: function () {
        return {
            youtubeInfo: null,
            youtubeLoading: ''
        }
    },
    updateInfo: function (info) {
        this.setState({ youtubeInfo: info });
    },
    updateLoading: function(loading){
        this.setState({youtubeLoading: loading});
    },
    render: function () {
        return (
            <div className="container">
                <YoutubeHeader
                    updateInfo={this.updateInfo}
                    updateLoading={this.updateLoading}
                />
                <YoutubeVideo
                    youtubeInfo = {this.state.youtubeInfo}
                    youtubeLoading = {this.state.youtubeLoading}
                />
                <YoutubeRecomendado
                    youtubeInfo={this.state.youtubeInfo} 
                />
            </div>
        )
    }
});

module.exports = Youtube;