import React from 'react'

export const VideoCard = ({video}) => {


    return(
        <> 
            <div className="player">
                <p>{video.name}</p>
                <video width="400" height="300" controls="controls" autoplay="autoplay">
                    <source src="" type='video/mp4'/>
                </video>
                <div><span style={{marginRight: "40px"}}>Views: {video.views}</span>Likes: {video.likes}<span></span></div>
            </div>
        </>
    )
}       