import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoPlaylist from './components/video_playlist';
import Instructions from './components/instructions';
import YOUTUBE_API_KEY from './api_keys'
import './assets/stylesheets/base.scss';



// Your api key here.
const API_KEY = YOUTUBE_API_KEY;

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            videoPlaylist:[],
            isVideoPlaying:false,
            isSkip30:false,
        };

        // this.videoSearch('') // initial search
        this.addVideoToPlaylist = this.addVideoToPlaylist.bind(this);
        this.setIsVideoPlaying = this.setIsVideoPlaying.bind(this);
        this.startNextVideo = this.startNextVideo.bind(this);
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({
                videos: videos,
             });
        });
    }

    addVideoToPlaylist(video) {
        this.setState({videoPlaylist: this.state.videoPlaylist.concat([video])});
    }

    removeVideoFromPlaylist(video) {
        const index = this.state.videoPlaylist.findIndex(x => x == video);
        let newPlaylist = this.state.videoPlaylist.slice();
        newPlaylist.splice(index, 1);
        this.setState({videoPlaylist: newPlaylist});
    }

    setIsVideoPlaying(boolIsVideoPlaying) {
        this.setState({isVideoPlaying: boolIsVideoPlaying})
    }

    startNextVideo(video) {
        const index = this.state.videoPlaylist.findIndex(x => x == video);
        this.setState({selectedVideo: this.state.videoPlaylist[index+1]});
        this.removeVideoFromPlaylist(video);
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch}
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}
                    AddToPlaylist={this.addVideoToPlaylist}
                />
                <VideoDetail
                    setIsVideoPlaying={this.setIsVideoPlaying}
                    video={this.state.selectedVideo}
                    isVideoPlaying={this.state.isVideoPlaying}
                    isSkip30={this.state.isSkip30}
                    isNotSkip30={() => this.setState({isSkip30: false})}
                    startNextVideo={this.startNextVideo}
                />
                <Instructions />
                <VideoPlaylist
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    selectedVideo={this.state.selectedVideo}
                    videoPlaylist={this.state.videoPlaylist}
                    isVideoPlaying={this.state.isVideoPlaying}
                    handlePlayButton={() => this.setState({isVideoPlaying: !this.state.isVideoPlaying})}
                    removeVideo={(video) => this.removeVideoFromPlaylist(video)}
                    handleSkip30button={() => this.setState({isSkip30: true }) }
                    handleClickNextVideo={() => this.startNextVideo(this.state.selectedVideo)}
                />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.querySelector('.container-fluid') );
