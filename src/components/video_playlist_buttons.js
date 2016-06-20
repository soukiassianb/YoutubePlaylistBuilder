import React, { Component } from 'react';

export default class VideoPlaylistButtons extends Component {
    constructor(props) {
        super(props);

        this.handleClickPlayButton = this.handleClickPlayButton.bind(this);
        this.handleClickSkip30Button = this.handleClickSkip30Button.bind(this);
        this.handleClickNextVideo = this.handleClickNextVideo.bind(this);
    }

    handleClickPlayButton() {
        this.props.handlePlayButton();
    }

    handleClickSkip30Button() {
        this.props.handleSkip30button();
    }

    handleClickNextVideo() {
        this.props.handleClickNextVideo();
    }

    render() {
        const playerIcon = this.props.isVideoPlaying ? 'fa fa-pause':'fa fa-play'
        return(
            <li className="playlist-button">
                <i className={playerIcon} onClick={this.handleClickPlayButton}></i>
                <i className="fa fa-step-forward small" onClick={this.handleClickNextVideo} aria-hidden="true"></i>
                <i className="fa fa-rotate-right small" onClick={this.handleClickSkip30Button} aria-hidden="true"></i>
            </li>
        )
    }
}
