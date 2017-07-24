webpackJsonp([1],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1); // importa a lib react
var reactDOM = __webpack_require__(16); // importa a lib react-dom

var Facebook = __webpack_require__(367);

reactDOM.render(React.createElement(Facebook, null), document.getElementById('another'));

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var FacebookHeader = __webpack_require__(368);

var Youtube = React.createClass({
    displayName: 'Youtube',

    render: function () {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(FacebookHeader, null)
        );
    }
});

module.exports = Youtube;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var Glyphicon = __webpack_require__(84);

var YoutubeHeader = React.createClass({
    displayName: 'YoutubeHeader',

    getInitialState: function () {
        return {
            name: ''
        };
    },
    handleClickUrl: function () {},
    handleSubmit: function (e) {

        e.preventDefault();
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                React.createElement('img', { src: './images/FB_LOGO.png', className: 'img-rounded logoFB', alt: 'Logo Youtube' }),
                React.createElement(
                    'label',
                    { className: 'tituloFB' },
                    'Download de v\xEDdeo do Facebook'
                )
            ),
            React.createElement(
                'div',
                { className: 'panel panel-default painelFB' },
                React.createElement(
                    'div',
                    { className: 'panel-body painel' },
                    React.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        React.createElement(
                            'h2',
                            null,
                            'Cole o link do v\xEDdeo'
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'form-group input-group youtubeText' },
                                React.createElement(
                                    'span',
                                    { className: 'input-group-addon' },
                                    React.createElement(Glyphicon, { glyph: 'globe' })
                                ),
                                React.createElement('input', {
                                    type: 'text',
                                    ref: 'facebookURL',
                                    className: 'form-horizontal tamanhoTexto',
                                    placeholder: ' Ex:https://www.facebook.com/BillGates/videos/10152332454511961/'
                                }),
                                React.createElement(
                                    'button',
                                    {
                                        type: 'button',
                                        onClick: this.handleClickUrl,
                                        className: 'btn btn-primary botaoBuscar' },
                                    'Buscar'
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = YoutubeHeader;

/***/ })

},[366]);