import React, {useCallback, useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader';
import { VideoCard } from '../components/VideoCard';

export const DetailPage = () => {
  const {token} = useContext (AuthContext);
  const {request, loading} = useHttp ();
  const [file, setFile] = useState (null);
  const fileId = useParams ().id;

  const getFile = useCallback (
    async () => {
      try {
        const fetched = await request (`/api/video/${fileId}`, 'GET', null, {
          Authorization: `Bearer ${token}`,
        });
        setFile (fetched);
      } catch (e) {}
    },
    [fileId, request, token]
  );

  useEffect (
    () => {
      getFile ();
    },
    [getFile]
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && file && <VideoCard video = {file}/>}
    </>
  );
};
