var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Button = require('react-bootstrap/lib/Button');
var Button = require('react-bootstrap/lib/Button');

var YoutubeDownload = React.createClass({
    handleSubmitVideo: function () {

        console.log('video');
        console.log(this.props.filename);

        var filen = this.props.filename.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + '.mp4';

        if(this.props.itag == 'lowest'){
            alert("Escolha uma resolução");
            return;
        }

        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = 'http://67.205.172.210:8080/youtubeDownload/'+ filen +
                        '?id=' + this.props.youtubeId + 
                        '&itag=' + this.props.itag;

        tempLink.setAttribute('download', filen);
        tempLink.setAttribute('target', '_blank');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

    },
    handleSubmitAudio: function () {

        console.log('audio');
        var filen = this.props.filename.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + '.mp3';

        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = 'http://67.205.172.210:8080/youtubeDownload/'+ filen + 
                        '?id=' + this.props.youtubeId + 
                        '&itag=lowest';

        tempLink.setAttribute('download', filen);
        tempLink.setAttribute('target', '_blank');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

    },
    render: function () {
        return (
            <div>
                <Button onClick={this.handleSubmitVideo}>
                    <Glyphicon glyph="film" />
                    &nbsp;Baixar vídeo
                </Button>
                &nbsp;
                <Button onClick={this.handleSubmitAudio}>
                    <Glyphicon glyph="music" />
                    &nbsp;Baixar áudio
                </Button>
            </div>
        );
    }
});

module.exports = YoutubeDownload;