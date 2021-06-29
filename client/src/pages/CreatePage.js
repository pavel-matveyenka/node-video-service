export const CreatePage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Upload the video</h1>

        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Upload</span>
            <form
              action="http://localhost:5000/api/video/upload"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="custom-input-field">
                <div className="input-field">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="custom-input"
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
                    multiple="multiple"
                  />
                  <label htmlFor="video" className="active">Upload video</label>
                </div>
                <div className="input-field">
                  <input
                    id="thumbnail"
                    type="file"
                    name="thumbnail"
                    className="custom-input"
                    multiple="multiple"
                  />
                  <label htmlFor="thumbnail" className="active">
                    Upload thumbnail
                  </label>
                </div>
                <input type="submit" value="Upload" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
