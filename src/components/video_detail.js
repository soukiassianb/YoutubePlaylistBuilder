import React from 'react';
import YouTube from 'react-youtube';

export default class VideoDetail extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnPlay = this.handleOnPlay.bind(this);
        this.handleOnPause = this.handleOnPause.bind(this);
        this.handleOnEnd = this.handleOnEnd.bind(this);
        this._onReady = this._onReady.bind(this);

        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);

        this.state = {
            videoPlayerLoaded:false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.videoPlayerLoaded){
           if(nextProps.isVideoPlaying == true) {
               this.play();
           } else if(nextProps.isVideoPlaying == false) {
               this.pause();
           }

           if(nextProps.isSkip30 == true) {
               this.skip30sec();
               this.props.isNotSkip30();
           }
       }
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        this.setState({ videoPlayerLoaded: true})
        event.target.pauseVideo();
    }

    handleOnPlay(event){
        this.props.setIsVideoPlaying(true);
    }

    handleOnPause(event){
        this.props.setIsVideoPlaying(false);
    }

    handleOnEnd(event) {
        this.props.startNextVideo(this.props.video);
    }

    pause() {
        const player = this.refs.youtube.internalPlayer;
        player.pauseVideo();
    }

    play() {
        const player = this.refs.youtube.internalPlayer;
        player.playVideo();
    }

    skip30sec() {
        const player = this.refs.youtube.internalPlayer;
        const elapsed_time = player.getCurrentTime().then(function(time){
             player.seekTo(time + 30);
        });
    }

    render() {

        if(!this.props.video){
            return <div>Loading...</div>
        };

        const videoId = this.props.video.id.videoId;

        const opts = {
              height: '100%',
              width: '100%',
              playerVars: { 
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls:0,
                iv_load_policy:3,
                showinfo:0
              }
          };

        return(
            <div className="video-wrapper">
                <YouTube
                    ref="youtube"
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady}
                    onPlay={this.handleOnPlay}
                    onPause={this.handleOnPause}
                    onEnd={this.handleOnEnd}
                  />
            </div>
        )
    }
}
