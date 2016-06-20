import React, { Component } from 'react';
import VideoList from './video_list';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: '',
            isSelected:false,
        };
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    SearchResultsClassName(){
        if(this.state.isSelected){
            return 'search-results show';
        }
        return 'search-results';
    }

    render() {
        console.log(this.props.videos);
        return(
            <div className="search-bar" onMouseLeave={(event) => this.setState({ isSelected:false })}>
                <input
                    value={this.state.term}
                    placeholder="Search music videos 🔦"
                    onChange={event => this.onInputChange(event.target.value)}
                    onSelect={(event) => this.setState({ isSelected:true })}
                />
                <div className={this.SearchResultsClassName()}>
                    <VideoList
                        onVideoSelect={this.props.onVideoSelect}
                        videos={this.props.videos}
                        AddToPlaylist={this.props.AddToPlaylist}
                    />
                </div>
            </div>
        )
    }
}
