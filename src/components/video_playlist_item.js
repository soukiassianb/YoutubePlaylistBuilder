import React from 'react';

const VideoListItem = ({video, onVideoSelect, removeVideo, SelectedVideo, isVideoPlaying}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    function handleRemoveButtonClick(e){
        removeVideo(video);
        e.stopPropagation();
    }
    function getPlaylistItemClass(){
        const itemClass = SelectedVideo == video ? 'playlist-item selected-item' : 'playlist-item'
        return itemClass;
    }
    function animatedBars(){
        if(SelectedVideo==video && isVideoPlaying){
            return(
        		<ul className="animated-bars">
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
                    <li></li>
        		</ul>
            )
        }
    }
    return (
        <li onClick={() => onVideoSelect(video)} className={getPlaylistItemClass()}>
            <img className="" src={imageUrl} />
            {animatedBars()}
            <div className="video-title">{video.snippet.title}</div>
            <div className="remove-video-item-button" onClick={(e) => handleRemoveButtonClick(e)}>
                <i className="fa fa-close"></i>
            </div>
        </li>
    );
}

export default VideoListItem;
