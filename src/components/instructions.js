import React from 'react';

const Instructions = (props) => {
    return(
        <div className="instructions">
            <h4>Welcome to Youtube playlist builder 🔥</h4>
            <br/>
            <p>A fast way to build playlists from Youtube.</p>
            <br/>
            <ol>
                <li>Search some music videos (at the top) 🔦</li>
                <li>Add them to your queue ✅</li>
                <li>Play your music 🎉</li>
            </ol>
            <br/>
            <p>A Project by <a target="_blank" href="http://soukiassian.me">Benjamin Soukiassian</a>, build with <a target="blank" href="https://facebook.github.io/react/">React</a>.
            Check out the source code <a target="_blank" href="https://github.com/soukiassianb/YoutubePlaylistBuilder">here</a>.</p>
        </div>
    )
}


export default Instructions;
