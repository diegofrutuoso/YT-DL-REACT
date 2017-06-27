var React = require('react');
var YoutubeHeader = require('./YoutubeHeader');
var YoutubeVideo = require('./YoutubeVideo');
var YoutubeRecomendado = require('./YoutubeRecomendado');
var YoutubeInfo = require('../services/YoutubeInfo');

var Youtube = React.createClass({
    getInitialState: function () {
        return {
            youtubeInfo: null,
            youtubeLoading: ''
        }
    },
    componentWillMount: function(){
        var urlParams = new URLSearchParams(window.location.search);
        if( urlParams.get('youtubeId') !== null)
        {
            this.searchInfo(urlParams.get('youtubeId'));
        }
    },
    updateInfo: function (info) {
        this.setState({ youtubeInfo: info });
    },
    updateLoading: function(loading){
        this.setState({youtubeLoading: loading});
    },
    searchInfo: function(id){
        this.updateInfo(null);
        this.updateLoading('X');

        YoutubeInfo.getById(id).then(function (response) {
            this.updateInfo(response.data);
            this.updateLoading(' ');
        }.bind(this));
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