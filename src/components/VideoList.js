import React from 'react';
import VideoListItem from './VideoListItem';

const createVideoList = (props) => props.videos.map(video => (
    <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}
    />
));

const VideoList = (props) => (
    <ul className="col-md-4 list-group">
        {createVideoList(props)}
    </ul>
);

export default VideoList;
