import React from 'react';

const VideoDetail = (props) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const video = props.video;
  const title = video.snippet.title;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
    // can also write const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;