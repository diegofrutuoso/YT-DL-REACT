var React = require('../bower_components/react'); // importa a lib react
var reactDOM = require('../bower_components/react-dom'); // importa a lib react-dom

var Youtube = require('./components/Youtube');

reactDOM.render(<Youtube/>, document.getElementById('app'));