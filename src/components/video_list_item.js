import React from 'react';

const VideoListItem = ({video, onVideoSelect, AddToPlaylist}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    <div className="list-button-wrapper">
                        <button onClick={() => onVideoSelect(video)} className="custom-button">Play now <i className="fa fa-play"></i></button>
                        <br/>
                        <button onClick={() => AddToPlaylist(video)} className="custom-button">Add to queue <i className="fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
