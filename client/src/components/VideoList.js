import React from 'react';
import {Link} from 'react-router-dom';

export const VideoList = ({videos}) => {
  if (!videos.length) {
    return <p className="center">The video list is empty</p>;
  }
  return (
    <ul className="collection">
      {videos.map (video => {
        return (
          <li className="collection-item" key={video._id}>
            <div>
              <p>{video.name}</p>
              <p>{video.date}</p>
              <p>Views: {video.views}</p>
              <p>Likes: {video.likes}</p>
              <Link to={`/detail/${video._id}`}>Open</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
