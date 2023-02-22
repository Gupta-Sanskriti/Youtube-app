import React from 'react';
import {RxDotFilled} from 'react-icons/rx'
const VideoCard = ({video}) => {
    console.log(video)
  return (
    <div className='shadow-md rounded p-2 m-2'> 
        <img className="rounded" src={video?.snippet?.thumbnails?.medium?.url} alt="youtube video" />
        <div className=''>
            <h1 className='line-clamp-2 font-semibold'>{video?.snippet?.localized?.title}</h1>
            <p className='line-clamp-1 font-light text-sm'>{video?.snippet?.channelTitle}</p>
            {/* <div className="flex">
                <p className=""></p> 
                <RxDotFilled/>
                <p className=""></p>
            </div> */}

        </div>
    </div>
  )
}

export default VideoCard