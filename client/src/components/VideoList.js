import React from 'react';
import {Link} from 'react-router-dom';

export const VideoList = ({videos}) => {
  if (!videos.length) {
    return <p className="center">The video list is empty</p>;
  }
  return (
    <ul className="collection" style={{width: '80%'}}>
      {videos.map (video => {
        return (
          <li className="collection-item" key={video._id}>
            <div>
              <p><b>{video.name.replace (/.mp4/, '')}</b></p>
              <p>{video.date.slice (0, video.date.indexOf ('T', 0))}</p>
              <Link
                to={`/detail/${video._id}`}
                className="waves-effect waves-light btn-small blue darken-1"
              >
                Play
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
