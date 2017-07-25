var React = require('react');
var FacebookHeader = require('./FacebookHeader');
var FacebookVideo = require('./FacebookVideo');

var Youtube = React.createClass({
    getInitialState: function () {
        return {
            facebookInfo: null,
            facebookLoading: ''
        }
    },
    updateInfo: function (info) {
        this.setState({ facebookInfo: info });
    },
    updateLoading: function (loading) {
        this.setState({ facebookLoading: loading });
    },
    render: function () {
        return (
            <div className="container">
                <FacebookHeader 
                    updateInfo={this.updateInfo}
                    updateLoading={this.updateLoading}                
                />
                <FacebookVideo
                    facebookInfo = {this.state.facebookInfo}
                    facebookLoading = {this.state.facebookLoading}
                />
            </div>
        )
    }
});

module.exports = Youtube;