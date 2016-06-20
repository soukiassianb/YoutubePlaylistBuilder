import React from 'react';
import PlaylistItem from './video_playlist_item';
import PlaylistButtons from './video_playlist_buttons'

const VideoPlaylist = (props) => {
    const videoItems = props.videoPlaylist.map((video) => {
        return (
            <PlaylistItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
                removeVideo={props.removeVideo}
                SelectedVideo={props.selectedVideo}
                isVideoPlaying={props.isVideoPlaying}
            />
        );
    });

    return(
        <div>
            <ul className="video-playlist">
                <PlaylistButtons
                    isVideoPlaying={props.isVideoPlaying}
                    handlePlayButton={props.handlePlayButton}
                    handleSkip30button={props.handleSkip30button}
                    handleClickNextVideo={props.handleClickNextVideo}
                />
                {videoItems}
            </ul>
        </div>
    );
};

export default VideoPlaylist;
