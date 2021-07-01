import React from 'react'
import ReactPlayer from 'react-player'

export const VideoCard = ({video}) => {
    return(
        <> 
            <div className="player">
                <p>{video.name}</p>
                <ReactPlayer url={video.path}/> 
                <div><span style={{marginRight: "40px"}}>Views: {video.views}</span>Likes: {video.likes}<span></span></div>
            </div>
        </>
    )
}        