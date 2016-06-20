import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    if(props.videos.length){
        const videoItems = props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}
                    AddToPlaylist={props.AddToPlaylist}
                />
            );
        });
        return(
            <div>
                <ul className="results-ul">
                    {videoItems}
                </ul>
            </div>
        );

    } else {
        const videoItems = '';
        return(
            <div>
                <ul className="results-ul">
                {videoItems}
                </ul>
            </div>
        );
    }
};

export default VideoList;
