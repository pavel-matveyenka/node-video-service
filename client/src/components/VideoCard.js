import React from 'react'
import ReactPlayer from 'react-player'

export const VideoCard = ({video}) => {
    const path = video.path.replace(/\\/g, '/')
    const fullPath = `http://localhost:5000/api/${path}`

    const videoName = video.name.replace(/.mp4/, '')

    return(
        <> 
            <div className="player">
                <p className='video-title'>{videoName}</p>
                <ReactPlayer url={fullPath} controls='true'/> 
                {/* <div className = 'video-footer'><span style={{marginRight: "40px"}}>Views: {video.views}</span>Likes: {video.likes}<span></span></div> */}
            </div>
        </>
    )
}        