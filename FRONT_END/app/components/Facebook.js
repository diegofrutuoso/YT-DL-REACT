var React = require('react');
var FacebookHeader = require('./FacebookHeader');

var Youtube = React.createClass({
    render: function () {
        return (
            <div className="container">
                <FacebookHeader/>
            </div>
        )
    }
});

module.exports = Youtube;