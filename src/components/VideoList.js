import React from "react";
import VideoItem from "./VideoItem";



const VideoList =({videolist,onselect})=>{
    const renderList= videolist.map((video)=>{
        return <VideoItem key={video.id.videoId}  onselect={onselect} video={video}/>
    })
    return <div>{renderList}</div>
}
export default VideoList