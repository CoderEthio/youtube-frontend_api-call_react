import React from "react";

const VideoDetails =({selvideo})=>{
    if(!selvideo){
        return <div>Loading...</div>
    }

    const videoSrc=`https://www.youtube.com/embed/${selvideo.id.videoId}`
    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video player"/>
            </div>
            <div className="ui segment">
               <h4 className="ui header">{selvideo.snippet.title}</h4>
                <p>{selvideo.snippet.description}</p>
            </div>
        </div>

    )
}
export default VideoDetails;