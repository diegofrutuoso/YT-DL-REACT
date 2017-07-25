var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Button = require('react-bootstrap/lib/Button');
var Button = require('react-bootstrap/lib/Button');

var FacebookDownload = React.createClass({
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
        return (
            <div>
                <Button onClick={this.handleSubmitVideo} className="downloadButtonFB">
                    <Glyphicon glyph="film" />
                    &nbsp;Baixar Vídeo Baixa Qualidade
                </Button>
                &nbsp;
                <Button onClick={this.handleSubmitVideoHD} className="downloadButtonFB">
                    <Glyphicon glyph="download-alt" />
                    &nbsp;Baixar Vídeo em HD
                </Button>
            </div>
        );
    }
});

module.exports = FacebookDownload;