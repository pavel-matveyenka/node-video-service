import React, {useEffect, useState, useContext} from 'react';
//import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';

export const CreatePage = () => {
  const message = useMessage ();
  //const {token} = useContext (AuthContext);
  const {loading, error, request, clearError} = useHttp ();
  // const [form, setForm] = useState ({
  //   name: '',
  //   file: null,
  //   thumbnail: null,
  //   date: '',
  // });

  useEffect (
    () => {
      message (error);
      clearError ();
    },
    [error, message, clearError]
  );

  // useEffect (() => {
  //   window.M.updateTextFields ();
  // }, []);

  // const changeHandler = event => {
  //   setForm ({...form, [event.target.name]: event.target.value});
  // };

  // const uploadHandler = async () => {
  //   try {
  //     form.date = Date.now ();

  //     let data = await request ('/api/video/upload', 'POST', {
  //       ...form,
  //     });
  //     message (data.message);
  //   } catch (e) {}
  // };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Upload the video</h1>

        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Upload</span>
            <form
              action="/api/video/upload"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="custom-input-field">
                <div className="input-field">
                  <input
                    id="name"
                    type="string"
                    name="name"
                    className="custom-input"
                    // onChange={changeHandler}
                  />
                  <label htmlFor="name" className="active">
                    Name of your video
                  </label>
                </div>
                <div className="input-field">
                  <input
                    id="video"
                    type="file"
                    name="video"
                    className="custom-input"
                    // onChange={changeHandler}
                  />
                  <label htmlFor="video" className="active">Upload video</label>
                </div>
                <div className="input-field">
                  <input
                    id="thumbnail"
                    type="file"
                    name="thumbnail"
                    className="custom-input"
                    // onChange={changeHandler}
                  />
                  <label htmlFor="thumbnail" className="active">
                    Upload thumbnail
                  </label>
                </div>
                <input type="submit" value="Upload" />
              </div>
            </form>
          </div>
          {/* <div className="card-action">
            <button
              className="btn yellow darken-4 auth-button"
              onClick={uploadHandler}
              disabled={loading}
            >
              Upload
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
