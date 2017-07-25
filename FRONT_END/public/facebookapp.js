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
var FacebookVideo = __webpack_require__(370);

var Youtube = React.createClass({
    displayName: 'Youtube',

    getInitialState: function () {
        return {
            facebookInfo: null,
            facebookLoading: ''
        };
    },
    updateInfo: function (info) {
        this.setState({ facebookInfo: info });
    },
    updateLoading: function (loading) {
        this.setState({ facebookLoading: loading });
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(FacebookHeader, {
                updateInfo: this.updateInfo,
                updateLoading: this.updateLoading
            }),
            React.createElement(FacebookVideo, {
                facebookInfo: this.state.facebookInfo,
                facebookLoading: this.state.facebookLoading
            })
        );
    }
});

module.exports = Youtube;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var FacebookInfo = __webpack_require__(369);
var Glyphicon = __webpack_require__(57);

var YoutubeHeader = React.createClass({
    displayName: 'YoutubeHeader',

    getInitialState: function () {
        return {
            name: ''
        };
    },
    handleClickUrl: function () {

        this.props.updateInfo(null);
        this.props.updateLoading('X');

        FacebookInfo.getByUrl(this.refs.facebookURL.value).then(function (response) {
            this.props.updateInfo(response.data);
            this.props.updateLoading(' ');
        }.bind(this));

        this.refs.facebookURL.value = '';
    },
    handleSubmit: function (e) {

        e.preventDefault();
        this.props.updateInfo(null);
        this.props.updateLoading('X');

        FacebookInfo.getByUrl(this.refs.facebookURL.value).then(function (response) {
            this.props.updateInfo(response.data);
            this.props.updateLoading(' ');
        }.bind(this));

        this.refs.facebookURL.value = '';
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

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(136);

var FacebookInfo = {
    getByUrl: function (facebookUrl) {
        return axios.get('http://67.205.172.210:8080/facebookInfo?url=' + facebookUrl);
    }
};

module.exports = FacebookInfo;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var FacebookDownload = __webpack_require__(371);

var FacebookVideo = React.createClass({
    displayName: 'FacebookVideo',

    getInitialState: function () {
        return {
            itag: 'lowest'
        };
    },
    updateResolution: function (itag) {
        this.setState({ itag: itag });
    },
    render: function () {
        var FacebookInfo = null;

        if (this.props.facebookInfo) {
            FacebookInfo = React.createElement(
                'div',
                { className: 'panel panel-default painel-conteudo' },
                React.createElement(
                    'div',
                    { className: 'panel-body painel-conteudo' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-lg-4' },
                            React.createElement('img', { className: 'img-thumbnail imagem-thumb',
                                src: this.props.facebookInfo.thumbnail,
                                alt: 'avatar' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-lg-8' },
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'p',
                                    { className: 'titulo-thumbFB' },
                                    this.props.facebookInfo.nomePerfil
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'p',
                                    { className: 'outros-thumbFB' },
                                    this.props.facebookInfo.descricao
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'p',
                                    { className: 'outros-thumbFB' },
                                    'Publicado em: ',
                                    this.props.facebookInfo.publicado
                                )
                            ),
                            React.createElement(FacebookDownload, {
                                url: this.props.facebookInfo.url,
                                HD: this.props.facebookInfo.HD,
                                filename: this.props.facebookInfo.nomePerfil
                            }),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'a',
                                    { className: 'resp-sharing-button__link', href: 'https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io', target: '_blank', 'aria-label': '' },
                                    React.createElement(
                                        'div',
                                        { className: 'resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small' },
                                        React.createElement(
                                            'div',
                                            { 'aria-hidden': 'true', className: 'resp-sharing-button__icon resp-sharing-button__icon--solid' },
                                            React.createElement(
                                                'svg',
                                                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
                                                React.createElement('path', { d: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' })
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'resp-sharing-button__link', href: 'https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&url=http%3A%2F%2Fsharingbuttons.io', target: '_blank', 'aria-label': '' },
                                    React.createElement(
                                        'div',
                                        { className: 'resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small' },
                                        React.createElement(
                                            'div',
                                            { 'aria-hidden': 'true', className: 'resp-sharing-button__icon resp-sharing-button__icon--solid' },
                                            React.createElement(
                                                'svg',
                                                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
                                                React.createElement('path', { d: 'M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' })
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'resp-sharing-button__link', href: 'whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fsharingbuttons.io', target: '_blank', 'aria-label': '' },
                                    React.createElement(
                                        'div',
                                        { className: 'resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small' },
                                        React.createElement(
                                            'div',
                                            { 'aria-hidden': 'true', className: 'resp-sharing-button__icon resp-sharing-button__icon--solid' },
                                            React.createElement(
                                                'svg',
                                                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
                                                React.createElement('path', { d: 'M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z' })
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'resp-sharing-button__link', href: 'https://telegram.me/share/url?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&url=http%3A%2F%2Fsharingbuttons.io', target: '_blank', 'aria-label': '' },
                                    React.createElement(
                                        'div',
                                        { className: 'resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small' },
                                        React.createElement(
                                            'div',
                                            { 'aria-hidden': 'true', className: 'resp-sharing-button__icon resp-sharing-button__icon--solid' },
                                            React.createElement(
                                                'svg',
                                                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
                                                React.createElement('path', { d: 'M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        } else {
            if (this.props.facebookLoading == 'X') {
                FacebookInfo = React.createElement(
                    'div',
                    { className: 'panel panel-default painel-conteudo' },
                    React.createElement(
                        'div',
                        { className: 'panel-body painel-conteudo' },
                        React.createElement('img', { src: './images/LOADINGFB.gif', className: 'img-rounded carregando', alt: 'Carregando', width: '30%', height: '30%' })
                    )
                );
            } else {
                FacebookInfo = React.createElement(
                    'div',
                    { className: 'panel panel-default painel-conteudo' },
                    React.createElement('div', { className: 'panel-body painel-conteudo' })
                );
            }
        }

        return FacebookInfo;
    }
});

module.exports = FacebookVideo;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var Glyphicon = __webpack_require__(57);
var Button = __webpack_require__(39);
var Button = __webpack_require__(39);

var FacebookDownload = React.createClass({
        displayName: 'FacebookDownload',

        handleSubmitVideo: function () {

                console.log('video');
                console.log(this.props.filename);

                var filen = this.props.filename.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + '.mp4';

                var tempLink = document.createElement('a');
                tempLink.style.display = 'none';
                tempLink.href = this.props.url;

                tempLink.setAttribute('download', filen);
                tempLink.setAttribute('target', '_blank');
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
        },
        handleSubmitVideoHD: function () {

                console.log('video');
                console.log(this.props.filename);

                var filen = this.props.filename.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + '.mp4';

                var tempLink = document.createElement('a');
                tempLink.style.display = 'none';
                tempLink.href = this.props.HD;

                tempLink.setAttribute('download', filen);
                tempLink.setAttribute('target', '_blank');
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
        },
        render: function () {
                return React.createElement(
                        'div',
                        null,
                        React.createElement(
                                Button,
                                { onClick: this.handleSubmitVideo, className: 'downloadButtonFB' },
                                React.createElement(Glyphicon, { glyph: 'film' }),
                                '\xA0Baixar V\xEDdeo Baixa Qualidade'
                        ),
                        '\xA0',
                        React.createElement(
                                Button,
                                { onClick: this.handleSubmitVideoHD, className: 'downloadButtonFB' },
                                React.createElement(Glyphicon, { glyph: 'download-alt' }),
                                '\xA0Baixar V\xEDdeo em HD'
                        )
                );
        }
});

module.exports = FacebookDownload;

/***/ })

},[366]);