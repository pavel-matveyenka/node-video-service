import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader';
import { VideoList } from '../components/VideoList';

export const VideoPage = () => {

  const [videos, setVideos] = useState ([]);
  const {loading, request} = useHttp ();
  const {token} = useContext (AuthContext);

  const fetchVideos = useCallback (
    async () => {
      try {
        const fetched = await request ('/api/video', 'GET', null, {
          Authorization: `Bearer ${token}`,
        });
        setVideos (fetched);
      } catch (e) {}
    },
    [request, token]
  );

  useEffect (
    () => {
      fetchVideos ();
    },
    [fetchVideos]
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && <VideoList videos={videos}/>}
    </>
  );
};
