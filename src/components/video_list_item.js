import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
  // const video = props.video;
  //const onVideoSelected = props.onVideoSelected;
  console.log(video);
  const imageURL = video.snippet.thumbnails.default.url;
  const imageURL_medium = video.snippet.thumbnails.medium.url;
  const imageURL_high = video.snippet.thumbnails.high.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelected(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL}
          // srcSet={`${imageURL_medium} 320w, ${imageURL_high} 480w`}
          className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
