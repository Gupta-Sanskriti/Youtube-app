import React, { useEffect, useState } from 'react'
import {GET_POPULAR_VIDEOS} from "../helper/apis"
import VideoCard from './VideoCard';

const MainContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getPopularVideo()
    }, [])

    const getPopularVideo = async()=>{
        const data = await fetch(GET_POPULAR_VIDEOS)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)
    }
    // videos.map((video)=>console.log(video))
    // nothing just commenting for fun
    if (videos.length === 0) return null

  return (
    <div className="w-[70rem] md:w-[80rem] flex justify-center p-2">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            {videos.map((video)=>(
                <VideoCard key={video.id} video={video}/>
                // {console.log(video)}
            ))}
            
        {/* {console.log(videos.items)} */}
        </div>
    </div>
  )
}

export default MainContainer